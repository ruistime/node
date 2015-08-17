import React , { Component } from 'react';
import classnames from 'classnames';
import * as Constants from "../../constants/constants";
import BasicItem from './BasicItem';
/**
 * BasicItem 组件
 */
export default class MediaItem extends BasicItem{
	static defaultProps = {
		url : Constants.A_DEFAUTL_URL,
		link:false 
	};
	//渲染左侧图标
	renderMedia(){
		const { imgUrl } = this.props;
		return  imgUrl ? (  
			<div className="item-media"><img src={imgUrl} style={{width:80}} /></div>
		 ) : null ;
	}
	
	//渲染左侧
	renderItemInner(props){
		let { text , after = {}, subTitle , content } = props;
		
		return (
			<div className="item-inner">
				<div className="item-title-row">
					{this.renderText(props)}
					{this.renderAfter(after)}
				</div>
				<div className="item-subtitle">{subTitle}</div>
          		<div className="item-text">{content}</div>
			</div>
		);
	}

}