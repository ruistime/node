import React, { Component , PropTypes } from 'react';
import TabContent from './TabContent';
import classnames from 'classnames';

import * as StylePropable from '../utils/stylePropable';



/**
 * Tabs 组件
 * create by lgp
 * 
 */
export default class Tabs extends Component {
    constructor(props,context){
     	super(props,context);
     	this.state = {
     		activeIndex:this.props.activeIndex || 0
     	}
    }
   
    componentWillUnmount(){
    	let target = React.findDOMNode(this.refs.animatedWrap);
    	target.removeEventListener("transitionend");
    }
    componentDidMount(){
    	const { activeIndex } = this.state;
    	this.props.onInitTab && this.props.onInitTab();
    }
  
    handleItemClick(currentIndex,tab){
    	
    	this.setActiveTab(currentIndex);
    	
    }
   
    
	
	/**
	 * 返回当前活动标签页索引
	 * @return active index
	 */
	getActiveTab(){
		return this.state.activeIndex;
	}
	/**
	 * 根据索引设置活动标签页
	 * 
	 */
	setActiveTab(index){

		this.setState({
			done:false,
			activeIndex:index
		},function () {
			let target = React.findDOMNode(this.refs.animatedWrap);
    	
	    	target.addEventListener("webkitTransitionEnd",()=>{
	    		//fix:跨tab页切换 bug
			    setTimeout(()=>{	
			    	this.props.onChangeTab && this.props.onChangeTab(index);
			    	target.removeEventListener("webkitTransitionEnd");
			    },0)
	    	});
		});
	}
	render(){
		
		let [
			tabs ,
			tabsContent,
			{ activeIndex  , firstLoad , done}
		] = [ [], [] , this.state];
		//遍历children寻找Tab组件和TabContent
		
		React.Children.forEach(this.props.children, (tab, index) => {
			//条目的type.name
			if (tab.type.name === "Tab") {
				let isActive = activeIndex == index;
				//显示特定索引的tab
				let element  = <TabContent active={isActive} >
						{tab.props.children}
				</TabContent>;

			    tabsContent.push(element);
					
				tabs.push(
					React.cloneElement(tab,{
						key:"tab_item_"+index,
						active:isActive,
						activeIndex:this.state.activeIndex,
						currentIndex:index,
    					handleItemClick:this.handleItemClick.bind(this),
					}) 
				);
				
			}
		});
		

		tabsContent = tabsContent.map((item,index)=>{
			return (
				React.cloneElement(item, {
					key:"tab_content_"+index+1,
    				active: index === activeIndex 
				}) 
			) 
		});

		
		let tabLinkWidth = 1 / tabs.length *100;
		let lightStyle={
			"-webkit-transform":'-webkit-translate3d(' + (Number.parseInt(this.state.activeIndex) * 100) + '%,0,0)',
			"transform":'translate3d(' + (Number.parseInt(this.state.activeIndex) * 100) + '%,0,0)',
			width:tabLinkWidth+'%'
		}
		let tabsStyle = {
			"-webkit-transform":'-webkit-translate3d(' + (-(Number.parseInt(this.state.activeIndex) * 100)) + '%,0,0)',
			"transform":'translate3d(' + (-(Number.parseInt(this.state.activeIndex) * 100)) + '%,0,0)'
		}
		
		return (
			<div className="tabbarWrapper">
				<div className="toolbar tabbar">
					<div className="toolbar-inner">
						{tabs}
						<span className="tab-link-highlight" style={StylePropable.mergeAndPrefix(lightStyle)}></span>	
					</div>
				</div>
				<div className="tabs-animated-wrap">
					<div className="tabs"  ref="animatedWrap" style={StylePropable.mergeAndPrefix(tabsStyle)}>
						{tabsContent}
					</div>
				</div>
			</div>	
		);
	}
}