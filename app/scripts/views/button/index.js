import React, { Component } from 'react';


/*var AppUI  = require('../../../../dist/bs-appui.min.js');*/
import Nav from '../../../../src/js/nav/Nav';
import NavItem from '../../../../src/js/nav/NavItem';
import Container from '../../../../src/js/layout/Container';
import PageContainer from '../../../../src/js/layout/PageContainer';
import Page from '../../../../src/js/layout/Page';
import Button from '../../../../src/js/button/Button';
import ButtonRow from '../../../../src/js/button/ButtonRow';
import ButtonList from '../../../../src/js/button/ButtonList';

export default class ButtonPage extends Component {

	constructor(props,context){
		super(props,context);
	}

	static defaultProps = {

	}
	componentDidMount(){

		
	}

	
	handleBack(){
		alert("单击了返回");
	}
	
	onClick(btn){
		alert("您单击的是："+btn.props.text);
	}
	
	render() {

	    return (
	    	<div className="views">
			    <Container>
			    	<PageContainer>
			    		<Page>
			    			<Nav title="绩效">
			    				<NavItem icon="back" role="left"  onClick={::this.handleBack}/>
			    				<NavItem icon="bars" role="right" />
			    			</Nav>
			    			<div className="page-content">
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

			    		</Page>
			    	</PageContainer>
			    </Container>
			    
			</div>
	     );
  }
}

