import React , { Component } from 'react';
import classnames from 'classnames';

import * as Constants from "../constants/constants";
import GroupList from './GroupList';
/**
 * ContactsList列表 
 
 */
export default class ContactsList extends GroupList {
	static defaultProps = {
		type:"contacts"
	}
}