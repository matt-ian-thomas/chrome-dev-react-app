import React, {Component} from 'react';
window.React = React;

import ReactDOM from 'react-dom';

class App extends Component {
	constructor(props, context){
		super(props, context);
	}

	render(){
		return (
			<div>text</div>
		);
	}

}

ReactDOM.render(<App />, document.getElementById("root"));