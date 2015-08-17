import React , { Component } from 'react';
import classnames from 'classnames';
import BasicList from './BasicList';
import SimpleItem from './item/SimpleItem';
import * as Constants from "../constants/constants";
/**
 * List组件
 */
export default class SimpleList extends BasicList{
	static defaultProps = {
		type:"list"
	}
	//自定义
	renderByDatas(datas,props){
		//遍历数据
		let listItems = datas.map((item,index)=>{
			const { ...other} = item;
			return (
				<SimpleItem {...other} />
			);
		});
		return (
			<ul>
				{listItems}
			</ul>
		);
	}
}