import React, { Component } from 'react';
import NavBar from '../../../../src/js/NavBar';
import Container from '../../../../src/js/layout/Container';
import PageContainer from '../../../../src/js/layout/PageContainer';
import Page from '../../../../src/js/layout/Page';
import Tabs from '../../../../src/js/tabs/Tabs';
import Tab from '../../../../src/js/tabs/Tab';
import { EventEmitter } from 'events';
let events = new EventEmitter();
export default class TabsPage extends Component {
	
	static defaultProps = {

	}
	componentDidMount(){
		
		
	}
	handleSelect(index,tab){
		let { tabs } = this.refs;
		tabs.setActiveTab(index);
	  	/*tabs.setActiveTab(index,function(){
	  			alert("xx");
	  			tabs.setState({
	  				done:true
	  			});
	  	});*/
	}
	render() {
	  	
	    return (
	    	<div className="views">
			    <Container>
			    	<PageContainer>
			    		<Page>
			    			<NavBar title="个人自助"  />
			    			<Tabs ref="tabs" activeIndex="3" onSelect={this.handleSelect.bind(this)}>
			    				<Tab label="绩效" >
			    					<div className="content-block">
			    						<p>This is tab 1 content</p>
			    					</div>
			    				</Tab>
			    				<Tab label="继任">
			    					<div className="content-block">
			    						<p>This is tab 2 content</p>
			    					</div>
			    				</Tab>
			    				<Tab label="测评">
			    					<div className="content-block">
			    						<p>This is tab 3 content</p>
			    					</div>
			    				</Tab>
			    				<Tab label="招聘">
			    					<div className="content-block">
			    						<p>This is tab 4 content</p>
			    					</div>
			    				</Tab>
			    			</Tabs>
			    		</Page>
			    	</PageContainer>
			    </Container>
			    
			</div>
	     );
  }
}
