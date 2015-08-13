import React, { Component , PropTypes } from 'react';
import classnames from 'classnames';
/**
 * NavItem　组件
 */
export default class NavItem extends Component {
	handleClick(){
		if(this.props.onClick) this.props.onClick();
	}
	render(){
		const { text ="" , icon = "" , url="javascript:;" } = this.props;
		let iconElement = icon.length === 0 ? null:(
				<i className={classnames("icon","icon-"+icon)}></i>
		);
		let element = text.length === 0 ?
			( 
				<a href={url} key={Math.random()}  
					   onClick={::this.handleClick} 
					   className={classnames("link","icon-only")}>
                		{iconElement}
            	</a>
            ):(
				<a href={url} key={Math.random()} onClick={::this.handleClick} className={classnames("link",{
				"icon-only":!icon
				}
			)}>
                {iconElement}
               	<span>{text}</span>
            </a>
        );
        return element;	
	}
}