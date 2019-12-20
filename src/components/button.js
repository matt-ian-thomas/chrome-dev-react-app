import React, {Component} from 'react';

export class Button extends Component {
	constructor(props, context) {
		super(props, context);
	}
	render() {
		let {
			value,
			label
		} = this.props;
		return (
			<button type="button" value={value}>{label}</button>
		);
	}
}