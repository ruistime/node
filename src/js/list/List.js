import React , { Component } from 'react';
import classnames from 'classnames';
import ListItem from './ListItem';
import * as Constants from "../constants/constants";
/**
 * List组件
 */
export default class List extends Component {
	static defaultProps = {
		type:"simple"
	}
	/**
	 * 渲染简单列表
	 * data---渲染的数据
	 * 	   数据格式：
	 * 	   [
	 * 	   	{
	 * 	   		icon:'f7',
	 * 	   		text:'补签(5)'
	 * 	   	},
	 * 	   	{
	 * 	   		icon:'f7',
	 * 	   		text:'请假(3)'
	 * 	   	},
	 * 	   	{
	 * 	   		icon:'f7',
	 * 	   		text:'绩效(10)'
	 * 	   	}
	 * 	   ]
	 * @return {[type]} [description]
	 */
	renderSimpleList(datas){
		//遍历数据
		let listItems = datas.map((item,index)=>{
			const { ...other} = item;
			return (
				<ListItem {...other} />
			);
		});
		return (
			<ul>
				{listItems}
			</ul>
		);

	}
	/**
	 * 渲染分组视图
	 * @return {[type]} [description]
	 */
	renderGroupList(source){
		//遍历数据
		let listItems = source.map((item,index)=>{
			let { text , datas } = item;
			let datasArr = [];
			let groupTitle = (<li className="list-group-title">{text}</li>);
			
			datasArr = datas.map((data,dataIndex)=>{	
				const { ...other} = data ;
				return (
					<ListItem {...other} />
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
		const { type , datas = []  } = this.props;
		let element  ;
		//根据type渲染不同类型的列表
		/*if( type == "simple" ){
			element = this.renderSimpleList(datas);
		}else if(type == "group"){
			element = this.renderGroupList(datas);
		}else{
			throw new Error("type类型暂不支持！");
		}*/
		switch(type){
			case 'simple':
				element = this.renderSimpleList(datas);
				break;
			case 'group':
			case 'contacts':
				element = this.renderGroupList(datas);
				break;
			
			default:
				throw new Error("暂时不支持["+type+"]类型");
		}
		return (
			<div className={classnames(Constants.LISTCLASSES["list"],Constants.LISTCLASSES[type])}>
				{element}
			</div>
		);
	}

}