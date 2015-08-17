import React , { Component } from 'react';
import classnames from 'classnames';
import * as Constants from "../../constants/constants";
import GroupItem from './GroupItem';
/**
 * ContactsItem 组件
 */
export default class ContactsItem extends GroupItem {
	static defaultProps = {
		url : Constants.A_DEFAUTL_URL,
		link:false 
	};
	
}