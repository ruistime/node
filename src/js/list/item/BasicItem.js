import React , { Component } from 'react';
import classnames from 'classnames';
import * as Constants from "../../constants/constants";

/**
 * BasicItem 组件
 */
export default class BasicItem extends Component{
	static defaultProps = {
		url : Constants.A_DEFAUTL_URL,
		link:false 
	};
	//渲染左侧图标
	renderMedia(icon){
		return  icon ? (  <div className="item-media">
			<i className={Constants.ICONS[icon]} />
		</div>  ) : null ;
	}
	//渲染左侧文本
	renderText(props){
		const { text } = props;
		return <div className="item-title">{text}</div>;
	}
	//渲染右侧After
	renderAfter(after={}){
		const  { text  } = after;
		return after ? <div className="item-after">{text}</div> : null;
	}
	//渲染左侧
	renderItemInner(props){
		const { text ,after } = props;
		return (
			<div className="item-inner">
				{this.renderText(props)}
				{this.renderAfter(after)}
			</div>
		);
	}
	renderComponent(){
		const { icon , 
				
				link , 
				url  , 
				after } = this.props ;
		
		let mediaComponent = this.renderMedia(icon);	
		
		let itemInnerComponent = this.renderItemInner(this.props);
		
		let innerElement = (
			<li>
				<div className="item-content">
					{mediaComponent}
					{itemInnerComponent}
				</div>	
	        </li>    
		); 
		//是否配置link
		let element = link ? ( 
			<li>
				<a href={url} className={Constants.LISTCLASSES["link"]}>
						{mediaComponent}
						{itemInnerComponent}
				</a> 
			</li> ) : innerElement;

		return element;		
	}
	render(){
		let element = this.props.renderComponent ? this.props.renderComponent().bind(this):this.renderComponent();
		return element;
	}
}