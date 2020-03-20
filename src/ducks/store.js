import {createStore, applyMiddleware} from 'redux';

import {getCurrentTime} from '../helpers/date-helpers';

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}
const crashReporter = store => next => action => {
  try {
    return next(action)
  } catch (err) {
    console.error('Caught an exception!', err)
    Raven.captureException(err, {
      extra: {
        action,
        state: store.getState()
      }
    })
    throw err
  }
}

function reducer(state = {}, action) {
  switch (action.type) {
    case 'TOGGLE_STYLES':
      return Object.assign({}, state, { mode: state.mode === 'light' ? 'dark' : 'light' })
    default:
      return state
  }
}

export default createStore(reducer, {
		mode: 'light',
		showButton: true
	},
	applyMiddleware(logger, crashReporter)
);
