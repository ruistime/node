import React, { Component , PropTypes } from 'react';
import NavItem from './NavItem';

/**
 * Nav 组件
 *    用法示例：
 *    	<Nav title="绩效">
			<NavItem icon="back" text="返回" role="left" onClick="">
			<NavItem icon="bars" text="菜单" role="right">
		</Nav> 
    Nav:
    	title:标题
    NavItem:
    	icon:图标
	    text:显示文本
	    role:显示位置
 */

export default class Nav extends Component {
	static defaultProps = {

	}

	renderPadding(roles="left",source){
		if(!source) return ;
		if(source[roles].length ==0 ) return ;
		return (
			<div className={roles}>
				{source[roles]}
			</div>
		);

	}
	render(){
		const [ navItems,{ title } ] = [ { 
				left:[],
				right:[]
			   } ,this.props];
		
		React.Children.forEach(this.props.children,(navItem,index) =>{
			if(navItem.type.name === "NavItem"){
				let { role = 'left' } = navItem.props
				navItems[`${role}`].push(
					navItem
				);
			}
		});


		return (
			<div className="navbar">
				<div className="navbar-inner">
					{this.renderPadding("left",navItems)}
					<div className="center">
						{title}
					</div>
					{this.renderPadding("right",navItems)}
				</div>
			</div>

		);
	}
}