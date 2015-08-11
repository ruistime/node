import  { Component , PropTypes } from 'react';
import  React from 'react/addons';
import classnames from 'classnames';
import * as StylePropable from '../utils/style-propable';
/**
 * Tabs 组件
 * create by lgp
 * <Tab>
 *    
 * </Tab>
 * 
 */
export default class Tabs extends Component{
     constructor(props,context){
     	
     	super(props,context);
     	this.state = {
     		activeIndex:0
     	}

     }
    /**************events  begin*********************/
    handleItemClick(currentIndex){
    	this.setState({
    		activeIndex: currentIndex
    	});
    }
   
    /**************events  end*********************/
	//API:获取活动状态的Tab
	getActiveTab(){

	}
	/**
	 * [setActiveTab description]
	 */
	setActiveTab(){
		
	}
	render(){
		
		let [
			tabs ,
			tabsContent,
			{ activeIndex }
		] = [ [], [] , this.state];
		
		React.Children.forEach(this.props.children, (tab, index) => {
			if (tab.type.name=== "Tab") {
				let { active } = tab.props;
				!!active && (activeIndex = index);
				
				React.Children.forEach(tab.props.children,(tabContent,xindex) =>{
					if(tabContent.type.name==="TabContent"){
						tabsContent.push(tabContent);
					}
				});
				tabs.push(
					React.addons.cloneWithProps(tab,{
						key:"tab_item_"+index,
						activeIndex:activeIndex,
						currentIndex:index,
    					handleItemClick:this.handleItemClick.bind(this),
					}) 
				);
				
			}
		});

		tabsContent = tabsContent.map((item,index)=>{
			return (
				React.addons.cloneWithProps(item, {
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
					<div className="tabs" style={StylePropable.mergeAndPrefix(tabsStyle)}>
						{tabsContent}
					</div>
				</div>
			</div>

			
		);
	}
}