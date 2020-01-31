import React, {Component} from 'react';
window.React = React;

import ReactDOM from 'react-dom';
import moment from 'moment';

import {Provider} from 'react-redux';

// Component imports
import App from './app';
import {Button} from './components/button';
import {getCurrentTime} from './helpers/date-helpers';

import store from './ducks/store';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
