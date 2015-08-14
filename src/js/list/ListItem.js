import React , { Component } from 'react';
import classnames from 'classnames';
import * as Constants from "../constants/constants";

/**
 * ListItem 组件
 */
export default class ListItem extends Component{
	

	render(){
		const { icon , 
				text , 
				link , 
				url = Constants.A_DEFAUTL_URL  , 
				count ,
			    showCount , after } = this.props ;
		let element , innerElement ;
		//是否配置图标
		let media = icon ? (  <div className="item-media">
						<i className={Constants.ICONS[icon]} />
			</div>  ):null;
		//右侧
		let afterELe = after ? <div className="item-after">{after.text}</div> : null;
		//
		let textEle = showCount ? 
			<div className="item-title">{text}(<span className="red-tip">{count}</span>)</div>
			: <div className="item-title">{text}</div>
		innerElement = (
			<li>
				<div className="item-content">
					{media}
					<div className="item-inner">
		            	{textEle}
		            	{afterELe}
		            </div>
				</div>	
	        </li>    
		);
		
		//是否配置link
		element = link ? ( 
			<li>
				<a href={url} className={Constants.LISTCLASSES["link"]}>
					{media}
					<div className="item-inner">
		            	{textEle}
		            	{afterELe}
		            </div>	
				</a> 
			</li> ) : innerElement;
		return (
			
			element
			
		);
	}
}