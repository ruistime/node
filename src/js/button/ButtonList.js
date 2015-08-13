import React , { Component , PropTypes } from 'react';
import classnames from 'classnames';
import * as Constants from "../constants/constants";

/**
 * ButtonList组件
 */
export default class ButtonList extends Component {
	render(){
		let { buttons } = this.props.children;
		let btns = [] ;
		React.Children.forEach( this.props.children,(btn,index)=>{
			 let cloneBtn = React.cloneElement(btn,{
						list:"list",
						big:undefined,
						fill:undefined,
						raised:undefined,
						
						button:undefined
					});
			 btns.push(
			 	<li>
			 		{cloneBtn}
			 	</li>
			 );
		});
		return (
			<div className="card">
				<div className="list-block">
					<ul>
						{btns}
					</ul>
				</div>
			</div>
		)
	}
}