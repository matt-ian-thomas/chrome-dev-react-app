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
    case 'UPDATE_TIME':
      return Object.assign({}, state, { time: getCurrentTime() })
    default:
      return state
  }
}

export default createStore(reducer, {
		time: getCurrentTime(),
		showButton: true
	},
	applyMiddleware(logger, crashReporter)
);
