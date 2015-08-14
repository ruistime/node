import React, { Component } from 'react';
/*var AppUI  = require('../../../../dist/bs-appui.min.js');*/
import Nav from '../../../../src/js/nav/Nav';
import NavItem from '../../../../src/js/nav/NavItem';
import Container from '../../../../src/js/layout/Container';
import PageContainer from '../../../../src/js/layout/PageContainer';
import Page from '../../../../src/js/layout/Page';

import List from '../../../../src/js/list/List';
import ListItem from '../../../../src/js/list/ListItem';
export default class ButtonPage extends Component {

	constructor(props,context){
		super(props,context);
	}

	static defaultProps = {
		datas1:[
	  	   	{
	  	   		icon:"f7",
	 	   		text:'补签',
	 	   		count:5,
	 	   		after:{
	 	   			text:"绩效"
	 	   		},
	 	   		link:true,
	 	   		showCount:true
	  	   	}
	  	],
	  	datas2:[
	  	  	{
	  	   		icon:"f7",
	  	   		link:true,
	 	   		text:'请假',
	 	   		after:{
	 	   			text:"绩任"
	 	   		},
	 	   		count:3,
	 	   		showCount:true
	  	   	}
	  	],
	  	datas3:[
	  	   	{
	  	   		icon:"f7",
	  	   		link:true,
	  	   		text:'绩效',
	  	   		after:{
	 	   			text:"测评"
	 	   		},
	  	   		count:10,
	 	   		showCount:true
	  	   	}
	  	],
	  	datas4:[
	  	{
	  		text:"A",
	  		datas:[
	  			{
	  				text:"Aaron"
	  			},
	  			{
	  				text:"Abb"
	  			}
	  		]

	  	},
	  	{
	  		text:"B",
	  		datas:[
	  			{
	  				text:"Baron"
	  			},
	  			{
	  				text:"BBC"
	  			}
	  		]

	  	}
	  		
	  	]
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
			    			<Nav title="待办">
			    				<NavItem icon="back" role="left"  onClick={::this.handleBack}/>
			    				<NavItem icon="bars" role="right" />
			    			</Nav>
			    			<div className="page-content">
			    				<div className="content-block-title">普通列表</div>
			    				<div className="content-block no-padding">
			    					<List type="simple" datas={this.props.datas1} />
			    					<List type="simple" datas={this.props.datas2} />
			    					<List type="simple" datas={this.props.datas3} />
			    				</div>
			    				<div className="content-block-title">分组列表</div>
			    				<div className="content-block no-padding">
			    					<List type="group" datas={this.props.datas4} />
			    				</div>

			    				<div className="content-block-title">联系人列表</div>
			    				<div className="content-block no-padding">
			    					<List type="contacts" datas={this.props.datas4} />
			    					
			    				</div>
			    			</div>	
			    		</Page>
			    	</PageContainer>
			    </Container>
			    
			</div>
	     );
  }
}

