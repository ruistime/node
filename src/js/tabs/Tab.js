import React , { Component , PropTypes } from 'react';
import classnames from 'classnames';
/**
 * Tabs 子组件 Tab
 */
export default class Tab extends Component {
	constructor(props,context){
		super(props,context);
	}

	handleClick(){
		
		const {activeIndex , currentIndex} = this.props;
		if(this.props.handleItemClick) this.props.handleItemClick(currentIndex);
	}
	render(){

		const { label = "", active } = this.props;
		//必须
		if(!label) throw new Error("Tab 必须配置label!");
		return (
			<a href="javascript:;" onClick={::this.handleClick} className={classnames("tab-link",{active:!!active})}>{ label }</a>
		);
	}
}