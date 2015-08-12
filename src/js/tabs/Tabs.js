import React, { Component , PropTypes } from 'react';
import TabContent from './TabContent';
import classnames from 'classnames';
import * as StylePropable from '../utils/style-propable';
import { EventListener } from '../utils/EventListener';

/**
 * Tabs 组件
 * create by lgp
 * 
 */
export default class Tabs extends Component {
    constructor(props,context){
     	super(props,context);
     
     	this.state = {
     		
     		activeIndex:this.props.activeIndex || 0,
     		showIndex:this.props.activeIndex|| 0
     	}
    }
    
    componentWillUnmount(){
    	let target = React.findDOMNode(this.refs.animatedWrap);
    	target.removeEventListener("transitionend");
    }
    componentDidMount(){
    	const { activeIndex } = this.state;
    	let target = React.findDOMNode(this.refs.animatedWrap);
    	target.addEventListener("transitionend",()=>{
    		//fix:跨tab页切换 bug
		    setTimeout(()=>{
		    
		    	this.setState({
		    		showIndex:this.state.activeIndex
		    	});
		    	/*if(this.props.onSelect){
    				this.props.onSelect(activeIndex);
		    	}else{
		    		this.setActiveTab(activeIndex);
		    	}*/
		    	target.removeEventListener("transitionend");
		    },0)
    	});
    }
    /**************events  begin*********************/
    handleItemClick(currentIndex,tab){
    	if(this.props.onSelect){
    		this.props.onSelect(currentIndex,tab);
    	}else{
    		this.setActiveTab(currentIndex);
    	}
    	//
    }
   
    /**************events  end*********************/
	
	/**
	 * 
	 * @return active index
	 */
	getActiveTab(){
		return this.state.activeIndex;
	}
	/**
	 * [setActiveTab description]
	 */
	setActiveTab(index){
		this.setState({
			activeIndex:index
		});
		/*let args = Array.from(arguments);
		let target = React.findDOMNode(this.refs.animatedWrap);
		if(args.length > 1 && typeof args[1] === "function"){

		}
		this.setState({
			activeIndex:index
		},()=>{
			if(args.length > 1 && typeof args[1] === "function"){
				let target = React.findDOMNode(this.refs.animatedWrap);
				target.addEventListener("transitionend",()=>{
    				//fix:跨tab页切换 bug
		    		setTimeout(()=>{
		    			args[1]();
		    			target.removeEventListener("transitionend");
		    		},0)
    			});

			}
			
		});*/
	}
	render(){
		
		let [
			tabs ,
			tabsContent,
			{ activeIndex , showIndex }
		] = [ [], [] , this.state];
		//遍历children寻找Tab组件和TabContent
		React.Children.forEach(this.props.children, (tab, index) => {
			//children中每一个条目的type.name
			if (tab.type.name=== "Tab") {
				let isActive = activeIndex == index;

				//显示特定的tab
				let element = (index == showIndex ) ? 
					<TabContent active={isActive}>
							{tab.props.children}
					</TabContent>
					:
					<TabContent active={isActive}></TabContent>;
				
				/*EventListener.listen(element,"good",function(){
					alert("xxx");
				});*/
				tabsContent.push(element);
				
				tabs.push(
					React.cloneElement(tab,{
						key:"tab_item_"+index,
						active:isActive,
						activeIndex:activeIndex,
						currentIndex:index,
    					handleItemClick:this.handleItemClick.bind(this),
					}) 
				);
				
			}
		});

		tabsContent = tabsContent.map((item,index)=>{
			return (
				React.cloneElement(item, {
					key:index+1,
    				active: index === activeIndex 
				}) 
			) 
		});
		
		let tabLinkWidth = 1 / tabs.length *100;
		let lightStyle={
			transform:'translate3d(' + ((+this.state.activeIndex) * 100) + '%,0,0)',
			width:tabLinkWidth+'%'
		}
		let tabsStyle = {
			transform:'translate3d(' + (-(+this.state.activeIndex) * 100) + '%,0,0)'
		}

		return (
			<div className="tabbarWrapper">
				<div className="toolbar tabbar">
					<div className="toolbar-inner">
						{tabs}
						<span className="tab-link-highlight" style={lightStyle}></span>	
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