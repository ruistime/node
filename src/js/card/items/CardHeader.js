import React , { Component } from 'react';
import classnames from 'classnames';
import * as Constants from "../../constants/constants";
import * as StylePropable from '../../utils/stylePropable';
/**
 * CardHeader组件
 */
export default class CardHeader extends Component {
	static defaultProps = {
		style:{},
		cls:Constants.STRING_COMMON.EMPTY
	};
	constructor(props,context){
		super(props,context);
	}
	render(){
		let { text ,  cls   , style  , ...other  } = this.props;
		return (
			<div className={ classnames("card-header",cls) } { ...other } 
					style={StylePropable.mergeAndPrefix(style)}>
				{ text }
			</div>
		);
	}
}