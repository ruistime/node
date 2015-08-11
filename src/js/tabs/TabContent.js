import React , { Component , PropTypes } from 'react';
import classnames from 'classnames';

export default class TabContent extends Component {
	render(){
		const { active } = this.props;
		return (
			<div className={classnames("page-content tab ",{
				active:active
			})}>
				{this.props.children}
			</div>
		);
	}
}