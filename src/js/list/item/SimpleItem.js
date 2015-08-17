import React , { Component } from 'react';
import classnames from 'classnames';
import * as Constants from "../../constants/constants";
import BasicItem from './BasicItem';

/**
 * SimpleItem 组件(继承BasicItem)
 */
export default class SimpleItem extends BasicItem{
	//重写renderText，实现自定义需求
	renderText(props){
		let { text , count = 0} = props;
		return <div className="item-title">{text}({count})</div>;
	}
}