import React , { Component , PropTypes } from 'react';
import classnames from 'classnames';
/**
 * Tabs 子组件 Tab
 */
export default class Tab extends Component {
	render(){
		const { label = "", active } = this.props;
		//必须
		if(!label) throw new Error("Tab 必须配置label!");
		return (
			<a href="javascript:;" className={classnames("tab-link",{active:!!active})}>{ label }</a>
		);
	}
}