import React , { Component , PropTypes } from 'react';
import classnames from 'classnames';
/**
 * ButtonRow组件
 */
export default class ButtonRow extends Component{
	render(){
		return (
			<p className="buttons-row">
				{this.props.children}
			</p>
		)
	}
}