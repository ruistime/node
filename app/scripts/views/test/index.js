import React, { Component } from 'react';
import classnames from 'classnames';

import { Button } from '../../../../dist/bs-appui';
import Nav from '../../../../src/js/nav/Nav';
import NavItem from '../../../../src/js/nav/NavItem';

import Page from '../../../../src/js/layout/Page';

//import ButtonRow from '../../../../src/js/button/ButtonRow';
//import ButtonList from '../../../../src/js/button/ButtonList';



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




	render() {
		
		const { done} = this.state ;
		return (
				<Page animation={true} ref="pageComponent">
	    			<Nav title="绩效">
	    				<NavItem icon="back" role="left"  />
	    				<NavItem icon="bars" role="right" />
	    			</Nav>
			    	<div className="page-content">
			    		<div className="page-content-inner">
			    			<div className="content-block-title">Button</div>
			    				<div className="content-block">
			    					<p>
			    						<Button text="BUTTON(有事件)"  color="red"
			    						 fill="fill" size="big" />
			    					</p>
								</div>
			    			</div>
	    				</div>
	    		</Page>	
	     );
	}
  }


