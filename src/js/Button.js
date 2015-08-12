import React , { Component , PropTypes } from 'react';
import classnames from 'classnames';

/**
 * Button 组件
 */
export default class Button extends Component {
	constructor(props,context){
		super(props,context);
	}
	render(){
		const { theme , fill , size , text , style = 'block', active } = this.props;
		let element ;
		//const sizeStyle =;
		const [sizeStyle,fillStyle] =[ size == "big" ? "button-big":"", size == "big" ? "button-fill":""]
		const classObj = classnames({
			button:true,
			
			theme:theme,
			active:!!active
		},sizeStyle,fillStyle);

		return (
			<p className="buttons-row">
				<a href="#" className="button ">Button 1</a>
				<a href="#" className="button">Button 2</a>
				
			</p>
		);
	}
}
Button.propTypes = {
	theme:PropTypes.string
	,fill:PropTypes.bool
	,szie:PropTypes.string
	,style:PropTypes.string
	,text:PropTypes.string.isRequired
	,active:PropTypes.bool
}