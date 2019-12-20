import React, {Component} from 'react';
window.React = React;

import ReactDOM from 'react-dom';

// Component imports
import {Button} from './components/button';

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
				{showButton
					? <Button dollarAmount={1000} value="Test Button" label="Button Label" />
					: undefined
				}
			</div>
		);
	}

}

ReactDOM.render(<App showButton={false}/>, document.getElementById("root"));