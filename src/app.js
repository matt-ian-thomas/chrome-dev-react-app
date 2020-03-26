import React, {Component} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import {Button} from './components/button';

class App extends Component {
	constructor(props, context){
		super(props, context);

		this.toggleStyles = this.toggleStyles.bind(this);
	}

	toggleStyles() {
		this.props.dispatch({
			type: 'TOGGLE_STYLES'
		});
	}
	render(){
		let {
			showButton,
			mode
		} = this.props;

		return (
			<div>
				<Button classNames={classNames( mode == 'light' ? 'appLight' : 'appDark')} value="Toggle Styles" label="Toggle Styles" action={this.toggleStyles}/>
			</div>
		);
	}
}

export default connect(state => ({
	mode: state.mode,
	time: state.time
}))(App);