import React , { Component , PropTypes } from 'react';
import classnames from 'classnames';
import { EventListener } from '../utils/EventListener';
export default class TabContent extends Component {
	componentWillUpdate(){
		
		return false;
	}
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