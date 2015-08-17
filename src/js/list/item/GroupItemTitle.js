import React , { Component } from 'react';
import classnames from 'classnames';
import * as Constants from "../../constants/constants";
import BasicItem from './BasicItem';
/**
 * GroupItemTitle 组件
 */
export default class GroupItemTitle extends BasicItem{
	static defaultProps = {
		text:Constants.STRING_COMMON.EMPTY
	}	
	render(){
		const { text } = this.props;
		return (
			<li className="list-group-title">
				{text}
			</li>
		); 
	}

}