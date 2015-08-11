import React from 'react';

export default class TabTemplate extends Component{
	render(){
		const { label = "", active } = this.props;
		//必须
		if(!label) throw new Error("Tab 必须配置label!");
		return (
			<a href="javascript:;" onClick={::this.handleClick} className={classnames("tab-link",{active:!!active})}>
				{this.props.children}
			</a>
		);
	}
}