import React , { Component , PropTypes } from 'react';
import classnames from 'classnames';
import * as Constants from "../constants/constants";
/**
 * Button 组件
 */
export default class Button extends Component{
	handleClick(){
		if(this.props.onClick) this.props.onClick(this);
	}
	render(){
		let { 
				url = Constants.A_DEFAUTL_URL , 
			    text = Constants.EMPTY , 
			    size ,
			    fill ,
			    list ,
			   	raised,
			    color,
			    onClick,
			    ...other
			   } = this.props;

		const { COLORS , BTNCLASSES }  = Constants;
		fill = fill ? "fill" : undefined;
		let button = list ? "":"button";
		return (
			<a href={url} className={classnames(button, COLORS[color],
				BTNCLASSES[size],BTNCLASSES[fill],BTNCLASSES[list],BTNCLASSES[raised])
				} onClick={::this.handleClick} {...other}>
				{text}
			</a>
		);
	}
}