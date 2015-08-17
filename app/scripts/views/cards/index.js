import React, { Component } from 'react';

import Nav from '../../../../src/js/nav/Nav';
import NavItem from '../../../../src/js/nav/NavItem';
import Container from '../../../../src/js/layout/Container';
import PageContainer from '../../../../src/js/layout/PageContainer';
import Page from '../../../../src/js/layout/Page';

import Card from '../../../../src/js/card/Card';
import CardHeader from '../../../../src/js/card/items/CardHeader';
import CardContent from '../../../../src/js/card/items/CardContent';
import CardFooter from '../../../../src/js/card/items/CardFooter';

export default class CardsPage extends Component {

	constructor(props,context){
		super(props,context);
	}

	static defaultProps = {
		
	  	cardData:{
	  		header:{
	  			text:"2015年第三季度绩效考核（7）"
	  		},
	  		content:{
	  			text:"Card with header and footer. Card header is used to display card title and footer for some additional information or for custom actions."
	  		},
	  		footer:{
	  			links:[{
	  				text:"待审批(2)",
	  				url:"javascript:;"
	  			},{
	  				text:"待打分(4)",
	  				url:"javascript:;"
	  			},{
	  				text:"签字确认(1)",
	  				url:"javascript:;"
	  			}]
	  		}
	  	}
	  
	}
	
	handleBack(){
		alert("单击了返回");
	}

	render() {

	    return (
	    	<div className="views">
			    <Container>
			    	<PageContainer>
			    		<Page>
			    			<Nav title="待办">
			    				<NavItem icon="back" role="left"  onClick={::this.handleBack}/>
			    				<NavItem icon="bars" role="right" />
			    			</Nav>
			    			<div className="page-content">
			    				<div className="content-block-title">Simple Card</div>
			    				<div className="content-block no-padding">
			    					<Card>
			    						<CardHeader text="2015年第三季度绩效考核（7）"/>
			    						<CardContent>
			    							Card with header and footer. Card header is used to display card title and footer for some additional information or for custom actions.
			    						</CardContent>
			    						<CardFooter>
			    							<a href="#" className="link">待审批</a>
    										<a href="#" className="link">待打分</a>
    										<a href="#" className="link">签字确认</a>
			    						</CardFooter>
			    					</Card>
			    				</div>
			    			</div>	
			    		</Page>
			    	</PageContainer>
			    </Container>
			    
			</div>
	     );
  }
}

