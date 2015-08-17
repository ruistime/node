import React, { Component } from 'react';
import classnames from 'classnames';

//var AppUI  = require('../../../../dist/bs-appui.min.js');
import Nav from '../../../../src/js/nav/Nav';
import NavItem from '../../../../src/js/nav/NavItem';

import Page from '../../../../src/js/layout/Page';
import Button from '../../../../src/js/button/Button';
import ButtonRow from '../../../../src/js/button/ButtonRow';
import ButtonList from '../../../../src/js/button/ButtonList';

export default class ButtonPage extends Component {

	constructor(props,context){
		super(props,context);
		this.state = {
			done:false
		};
	}

	static defaultProps = {

	}
	componentDidMount(){
		console.log(this);
	}
	
	
	onClick(btn){
		this.refs.pageComponent.addClass("page-from-center-to-right");
		setTimeout(()=>{
			this._reactInternalInstance._context.router.transitionTo("/");
		},500);
	}
	
	render() {
		const { done} = this.state ;
		return (
				<Page animation={true} ref="pageComponent">
	    			<Nav title="绩效">
	    				<NavItem icon="back" role="left"  onClick={::this.onClick}/>
	    				<NavItem icon="bars" role="right" />
	    			</Nav>
			    	<div className="page-content">
			    		<div className="page-content-inner">
			    			<div className="content-block-title">Button</div>
			    				<div className="content-block">
			    					<p>
			    						<Button text="BUTTON(有事件)"  color="red"
			    						 fill="fill" size="big"  onClick={::this.onClick}/>
			    					</p>
			    					<p>
			    						<Button text="BUTTON(disabled不会触发事件)"  disabled color="red"
			    						 fill="fill" size="big"  onClick={::this.onClick}/>
			    					</p>
			    					<p>
			    						<Button text="raised button"  color="blue"
			    						 fill="fill" size="big" raised="raised"/>
			    					</p>
			    					<p>
			    						<Button color="teal" text="BUTTON" 
			    						   fill="fill" size="big"/>
			    					</p>
					    		</div>
			    				<div className="content-block-title">Button Row</div>
			    				<div className="content-block">
			    					<ButtonRow>
			    						<Button text="BUTTON1" color="blue"
			    						 fill size="big"/>
			    						<Button text="BUTTON2" color="blue"
			    						 size="big" fill/>
			    					</ButtonRow>
			    				</div>
			    				<div className="content-block-title">Button Row2</div>
			    				<div className="content-block">
			    					<ButtonRow>
			    						<Button text="BUTTON1" color="blue"
			    						 fill size="big"/>
			    						<Button text="BUTTON2" color="blue"
			    						 size="big"/>
			    						 <Button text="BUTTON3" color="blue"
			    						 fill size="big"/>
			    					</ButtonRow>
			    				</div>
			    				<div className="content-block-title">Button List</div>
			    				<div className="content-block">
			    					<ButtonList>
			    						<Button text="BUTTON1" color="blue"
			    						  list="list"/>
			    						<Button text="BUTTON2" color="red"
			    						  list="list"/>
			    						 <Button text="BUTTON3" color="teal"
			    						  list="list"/>
			    					</ButtonList>
			    				</div>
			    			</div>
	    				</div>
	    		</Page>	
	     );
	}
  }


