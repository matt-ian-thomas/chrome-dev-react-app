import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Button} from './components/button';

class App extends Component {
	constructor(props, context){
		super(props, context);

		this.showCurrentTime = this.showCurrentTime.bind(this);
	}

	showCurrentTime() {
		this.props.dispatch({
			type: 'UPDATE_TIME'
		});
	}
	render(){
		let {
			showButton,
			time
		} = this.props;
		return (
			<div>
				<h1 id="time">{time}</h1>
				{showButton
					? <Button dollarAmount={1000} value="Test Button" label="What time is it?" action={this.showCurrentTime}/>
					: undefined
				}
			</div>
		);
	}
}

export default connect(state => ({
	showButton: state.showButton,
	time: state.time
}))(App);