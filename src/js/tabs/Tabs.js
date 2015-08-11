import React , { Component , PropTypes } from 'react';
import classnames from 'classnames';
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
     }

	//API:获取活动状态的Tab
	getActiveTab(){

	}
	/**
	 * [setActiveTab description]
	 */
	setActiveTab(){

	}
	render(){
		//let tabs = [] , tabsContent = [] , activeIndex = 0 ;
		let [tabs,tabsContent,activeIndex] = [[],[],0];
		React.Children.forEach(this.props.children, (tab, index) => {
			
			if (tab.type.name=== "Tab") {
				tabs.push(tab);
				let { active } = tab.props;
				!!active && (activeIndex = index);
				React.Children.forEach(tab.props.children,(tabContent,xindex) =>{
					if(tabContent.type.name==="TabContent"){
						tabsContent.push(tabContent);
					}
				});

			}
		});

		tabsContent = tabsContent.map((item,index)=>{
			return index === activeIndex ? ( 
				React.cloneElement(item, {
    				active:true
				}) 
			) : item;
		});

		if(tabs.length !== tabsContent.length){
			throw new Error("Tab组件数量要与TabContent组件数量保持一致");
		}
		//console.log(tabsss);
		return (
			<div className="tabbarWrapper">
				<div className="toolbar tabbar">
					<div className="toolbar-inner">
						{tabs}
						<span className="tab-link-highlight" style={{width:"33.33333333333%"}}></span>	
					</div>
				</div>
				<div className="tabs-animated-wrap">
					<div className="tabs">
						{tabsContent}
					</div>
				</div>
			</div>

			
		);
	}
}