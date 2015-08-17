import React , { Component } from 'react';
import classnames from 'classnames';
import BasicList from './BasicList';
import MediaItem from './item/MediaItem';
import * as Constants from "../constants/constants";
/**
 * MediaList组件 继承 BasicList
 */
export default class MediaList extends BasicList {
	static defaultProps = {
		type:"media"
	};
	renderByDatas(datas,props){
		//遍历数据
		let listItems = datas.map((item,index)=>{
			const { ...other} = item;
			return (
				<MediaItem {...other} />
			);
		});
		return (
			<ul>
				{listItems}
			</ul>
		);
	}
}
