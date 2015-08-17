import React , { Component } from 'react';
import classnames from 'classnames';
import CardHeader from './items/CardHeader';
import CardContent from './items/CardContent';
import CardFooter from './items/CardFooter';
import * as Constants from "../constants/constants";
import * as StylePropable from '../utils/stylePropable';

/**
 * Card组件
 */
export default class Cards extends Component {
	static defaultProps = {

	};
	constructor(props,context){
		super(props,context);
	}
	/**
	 * 渲染Card的部分Header
	 * return Header Component
	 */
	renderHeader(){
		const { header = {} } = this.props;
		const { ...other } = header;
		return (
			<CardHeader {...other} />
		);
	}
	/**
	 * 渲染Card的footer
	 * return Footer Component
	 */
	renderFooter(){
		const { footer = {} } = this.props;
		const { ...other } = footer;
		return (
			<CardFooter {...other} />
		);
	}
	/**
	 * 渲染Card的content
	 * return content Component
	 */
	renderContent(){
		const { content = {} } = this.props;
		const { ...other } = content;
		return (
			<CardContent {...other} />
		);
	}
	renderComponent(){
		const { cls , style , datas , ...other } = this.props;
		let element ;
		if( datas ){
			element = ( 
				<div className={classnames("card",cls)} style={StylePropable.mergeAndPrefix(style)}>
					{  this.renderHeader()  }
					{  this.renderContent() }
					{  this.renderFooter()  }
				</div>
			);
		}else{
			element = (
				<div className={classnames("card",cls)} style={StylePropable.mergeAndPrefix(style)}>
					{ this.props.children }
				</div>
			);
		}
		return element;
	}
	render(){
		return this.renderComponent();	
	}
}