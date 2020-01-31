import React, {Component} from 'react';
window.React = React;

import ReactDOM from 'react-dom';
import moment from 'moment';

// Component imports
import {Button} from './components/button';
import {showCurrentTime} from './helpers/date-helpers'


class App extends Component {
	constructor(props, context){
		super(props, context);
	}

	render(){
		let {
			showButton
		} = this.props;
		return (
			<div>
				<h1 id="time">Hello!</h1>
				{showButton
					? <Button dollarAmount={1000} value="Test Button" label="What time is it?" action={showCurrentTime}/>
					: undefined
				}
			</div>
		);
	}
}

ReactDOM.render(<App showButton={true}/>, document.getElementById("root"));
