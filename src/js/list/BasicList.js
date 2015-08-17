import React , { Component } from 'react';
import classnames from 'classnames';
import * as Constants from "../constants/constants";
/**
 * BasicList列表 
 * <BasicList>
 * 		<BasicItem icon text after link url >
 * </BasicList>
 */
export default class BasicList extends Component {
	static defaultProps = {
		type:"list"
	}
	//返回列表总数（个别子类需要重写这个方法）
	getCount(){
		return React.Children.count(this.props.children);
	}
	//具体子类去实现
	renderByDatas(){
		return null;
	}
	render(){
		const { type , datas } = this.props;
		let element, virtual ;
		if(datas){
			virtual = "virtual"; 
			element = this.renderByDatas(datas,this.props);
		}else{
			element = (
				<ul>
					{this.props.children}
				</ul>
			);
		}
		return (
			<div className={classnames(Constants.LISTCLASSES[type],Constants.LISTCLASSES[virtual])}>
				{element}
			</div>
		);
	}

}