import React , { Component , PropTypes } from 'react';
import classnames from 'classnames';

export default class Page extends Component {

	changeProps(){
		this.props.cls="xxx";
	}
	whichTransitionEvent(){
		 	let t;
		    let el = document.createElement('fakeelement');
		    let transitions = {
		      'transition':'transitionend',
		      'OTransition':'oTransitionEnd',
		      'MozTransition':'transitionend',
		      'WebkitTransition':'webkitTransitionEnd'
		    }

		    for(t in transitions){
		        if( el.style[t] !== undefined ){
		            return transitions[t];
		        }
		    }
	}
	componentDidMount(){
		const { namex } = this.props;
	
		const  node = React.findDOMNode(this);
		
		let  transitionEvent = this.whichTransitionEvent();

		/*if($node.hasClass("page-from-right-to-center")){
			node.addEventListener("webkitAnimationEnd",function(){
				//$node.prop("class","page page-on-center")
			});
		}else{
			node.addEventListener("webkitAnimationEnd",function(){
				//$node.prop("class","page page-on-left");
				//$node.prop("class","page page-on-center");
			});
		}*/

		
	}
	render(){
		const { cls } = this.props;
		
		return (
			<div className={classnames("page",cls)} >
				{this.props.children}
			</div>
		);
	}
};