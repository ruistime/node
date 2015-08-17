import React , { Component } from 'react';
import classnames from 'classnames';
import * as Constants from "../../constants/constants";
import * as StylePropable from '../../utils/stylePropable';
/**
 * CardContent组件
 */
export default class CardContent extends Component {
	static defaultProps = {
		style:{},
		
		cls:Constants.STRING_COMMON.EMPTY
	};
	constructor(props,context){
		super(props,context);
	}
	render(){
		let { cls   , style  , children , ...other } = this.props;
		return (
			<div className="card-content">
    			<div className={classnames("card-content-inner",cls)} style={StylePropable.mergeAndPrefix(style)} { ...other } >
    				{ children }
    			</div>
    		</div>
		);
	}
}