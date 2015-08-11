import React, { Component } from 'react';
import NavBar from '../../../../src/js/NavBar';
import Container from '../../../../src/js/layout/Container';
import PageContainer from '../../../../src/js/layout/PageContainer';
import Page from '../../../../src/js/layout/Page';
import Tabs from '../../../../src/js/tabs/Tabs';
import Tab from '../../../../src/js/tabs/Tab';
import TabContent from '../../../../src/js/tabs/TabContent';
export default class HomePage extends Component {
  goBack(){
  	 
  }
  render() {
  	const data = {
      "left":[
        {
          icon:"back"
        }
      ],
  		"right":[{
  			icon:"bars",
        	onClick:()=>{this.goBack()}
  		}]
  	}

    return (
    	<div className="views">
		    <Container>
		    	<PageContainer ref="pageContainer">
		    		<Page ref="index-1">
		    			<NavBar title="个人自助" data={data} />
		    			<Tabs>
		    				<Tab label="Tab 1" active>
		    					<TabContent>
		    						<div className="content-block">
		    							<p>This is tab 1 content</p>
		    						</div>
		    					</TabContent>
		    				</Tab>
		    				<Tab label="Tab 2" >
		    					<TabContent>
		    						<div className="content-block">
		    							<p>This is tab 2 content</p>
		    						</div>
		    					</TabContent>
		    				</Tab>
		    				<Tab label="Tab 3">
		    					<TabContent>
		    						<div className="content-block">
		    							<p>This is tab 3 content</p>
		    						</div>
		    					</TabContent>
		    				</Tab>
		    			</Tabs>
		    		</Page>
		    	</PageContainer>
		    </Container>
		    
		</div>
     );
  }
}
