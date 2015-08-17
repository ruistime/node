import React , { Component } from 'react';
import classnames from 'classnames';
import Card from './Card';
import * as Constants from "../constants/constants";
import * as StylePropable from '../utils/stylePropable';
import CardFooter from './items/CardFooter';
import CardContent from './items/CardContent';
/**
 * SimpleCard组件，扩展自Card
 */
export default class SimpleCard extends Card{
	static defaultProps = {
		type:"simple"
	}
	//重写renderContent实现自定义需求
	renderContent(){
		const { content = {} } = this.props.datas;
		const { text, count = 0, ...other } = content;
		const countEl = (
			<span className="red-tip">
				{count}
			</span> );
		
		return (
			<CardContent text={text} count = {count} {...other} >
				{text}({countEl})
			</CardContent>
		);
	}

	//重新renderFooter实现自定义展示
	renderFooter(){
		const { footer = {} } = this.props.datas;
		const { links = [], ...other } = footer;
		let _hiddenCount = 0;
		let linksItem = links.map((link,index)=>{
			let { text ,url,count = 0} = link;
			let resclass ;
			/*if(!count){
				resclass = "visible_hidden";
				_hiddenCount++;
			}*/
			return (
				<a href="javascript:;" className={classnames("link",resclass)}>{text}({count})</a>
			);
		});
		//if(_hiddenCount == links.length) return null;
		return (
			<CardFooter {...other} >
				{ linksItem }
			</CardFooter>
		);
	}
}