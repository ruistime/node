import React , { Component , PropTypes } from 'react';
import classnames from 'classnames';
import * as CSSCore from '../utils/cssCore';
import * as AnimationEvents from '../utils/animationEvents';
import * as StylePropable from '../utils/stylePropable';
import * as Constants from "../constants/constants";
export default class Page extends Component {
	static defaultProps = {
		animation:true,
		cls:"",
		style:{}
	};
	constructor(props,context){
		super(props,context);
	}
	addClass(newClass){
		let node = React.findDOMNode(this);
		CSSCore.removeClass(node,Constants.ANIMATION_CLAESSES["show_end_animation"]);
		CSSCore.addClass(node,Constants.ANIMATION_CLAESSES["hide_animation"]);
	}
	componentDidMount(){

		let node = React.findDOMNode(this);
		AnimationEvents.on(node,()=>{
			CSSCore.removeClass(node,Constants.ANIMATION_CLAESSES["show_animation"]);
			CSSCore.addClass(node,Constants.ANIMATION_CLAESSES["show_end_animation"]);
		})
	}
	componentWillUnmount(){
		
		
		
	}
	render(){
		const { cls , animation , style , ...other} = this.props;
		const result_class = animation ? Constants.ANIMATION_CLAESSES["show_animation"]:"";
		return (
			<div className={classnames("page",cls,result_class)}  {...other} style={StylePropable.mergeAndPrefix(style)}>
				{this.props.children}
			</div>
		);
	}
};