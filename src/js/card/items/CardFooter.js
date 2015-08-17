import React , { Component } from 'react';
import classnames from 'classnames';
import * as Constants from "../../constants/constants";
import * as StylePropable from '../../utils/stylePropable';
/**
 * CardFooter组件
 */
export default class CardFooter extends Component {
	static defaultProps = {
		style:{}
	};
	constructor(props,context){
		super(props,context);
	}
	render(){
		let { cls , children, style , ...other} = this.props;
		return (
			<div className={ classnames("card-footer",cls) } { ...other } style={StylePropable.mergeAndPrefix(style)}>
					{ this.props.children}
			</div>
		);
	}
}