import React , { Component } from 'react';
import classnames from 'classnames';
import BasicList from './BasicList';
import GroupItemTitle from './item/GroupItemTitle';
import GroupItem from './item/GroupItem';
import * as Constants from "../constants/constants";
/**
 * GroupList组件 继承 BasicList
 * 直接写：
 * <GroupList>
 * 		<Group text="A" key="A">
 *   		<GroupItem text="ABC" link> 
 *   		<GroupItem text="ATC" link> 
 * 		</Group>
 *   	<Group text="B" key="B">
 *    		<GroupItem text="BBC" link> 
 *   		<GroupItem text="BTC" link> 
 * 		</Group>
 * 
 * </GroupList>
 */
export default class GroupList extends BasicList {
	static defaultProps = {
		type:"group"
	}
	renderGroupTitle(text,props){
		return (
			<GroupItemTitle text={text} />
		);
	}
	renderGroupItem(props){
		let sumArr = [];
		React.Children.forEach(props.children,(group,index)=>{
			if(group.type.name=="Group"){
				let { text , key} = group.props;
				let item_obj = {
					text,
					datas:[]
				};
				React.Children.forEach(group.props.children,(item,g_index)=>{
					if(item.type.name == "GroupItem"){
						item_obj["datas"].push(item.props);
					}
				});
				sumArr.push(item_obj);
			}

		});
		
		return sumArr;
	}
	renderComponent(source){
		const datas = this.renderGroupItem(this.props)
		return this.renderByDatas(datas);
	}
	renderByDatas(source){
		
		let listItems = source.map((item,index)=>{
			let { text , datas } = item;
			let datasArr = [];
			let groupTitle = (<GroupItemTitle text={text} />);
			
			datasArr = datas.map((data,dataIndex)=>{	
				const { ...other} = data ;
				return (
					<GroupItem key = {"group_item_"+dataIndex}s {...other} />
				);	
			});
			return (
				<div className="list-group">
						<ul>
							{groupTitle}
							{datasArr}
						</ul>
				</div>
			);
			
		});
		return listItems;
	}
	render(){
		const { type , datas } = this.props;
		let element , virtual ;
		if(datas){
			virtual = "virtual";
			element = this.renderByDatas(datas);
		}else{
			element = this.renderComponent(datas);
		}
		return (
			<div className={classnames(Constants.LISTCLASSES[type],Constants.LISTCLASSES[virtual])}>
				{element}
			</div>
		);
	}
}
