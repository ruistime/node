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

import SimpleCard from '../../../../src/js/card/SimpleCard';


export default class CardsPage extends Component {

	constructor(props,context){
		super(props,context);
	}

	static defaultProps = {
		
	  	cardData:{
	  		
	  		content:{
	  			text:"2015年第三季度绩效考核"
	  		},
	  		footer:{
	  			links:[{
	  				text:"待审批",
	  				url:"javascript:;"
	  			},{
	  				text:"待打分",
	  				url:"javascript:;"
	  			},{
	  				text:"签字确认",
	  				url:"javascript:;"
	  			}]
	  		}
	  	},
	  	cardData3:{
	  		
	  		content:{
	  			text:"2015年第二季度绩效考核",
	  			count:2
	  		},
	  		footer:{
	  			links:[{
	  				text:"待审批",
	  				url:"javascript:;",
	  				count:1
	  			},{
	  				text:"待打分",
	  				count:1,
	  				url:"javascript:;"
	  			},{
	  				text:"签字确认",
	  				url:"javascript:;",
	  				count:0
	  			}]
	  		}
	  	},
	  	cardData4:{
	  		
	  		content:{
	  			text:"2015年第一季度绩效考核",
	  			count:1
	  		},
	  		footer:{
	  			links:[{
	  				text:"待打分",
	  				url:"javascript:;",
	  				count:1
	  			}]
	  		}
	  	},
	  	cardData2:{
	  		header:{
	  			text:"2015年第三季度绩效考核"
	  		},
	  		content:{
	  			text:"fdsafdasfdsafdfdsafdsafdsa"
	  		},
	  		footer:{
	  			text:"cardFooter"
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
			    				<div className="content-block-title">Card(直接配置)</div>
			    				<div className="content-block no-padding">
			    					<Card>
			    						<CardHeader text="2015年第三季度绩效考核（7）"/>
			    						<CardContent>
			    							Card with header and footer. Card header is used to display card title and footer for some additional information or for custom actions.
			    						</CardContent>
			    						<CardFooter>
			    							CardFooter!
			    						</CardFooter>
			    					</Card>
			    					
			    				</div>
			    				<div className="content-block-title">Card(配置datas)</div>
			    				<div className="content-block no-padding">
			    					<Card datas={this.props.cardData2}/> 
			    				</div>
			    				<div className="content-block-title">SimpleCard(配置datas)</div>
			    				<div className="content-block no-padding">
			    					<p>
			    						<SimpleCard datas={this.props.cardData}/> 
			    					</p>
			    					<p><SimpleCard datas={this.props.cardData3}/></p>
			    					<p><SimpleCard datas={this.props.cardData4}/></p>
			    				</div>
			    			</div>	
			    		</Page>
			    	</PageContainer>
			    </Container>
			    
			</div>
	     );
  }
}

