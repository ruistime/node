import React, { Component } from 'react';
import NavBar from '../../../../src/js/NavBar';
import Container from '../../../../src/js/layout/Container';
import PageContainer from '../../../../src/js/layout/PageContainer';
import Page from '../../../../src/js/layout/Page';
//import Button from '../../../../dist/bs-appui.min.js';
var AppUI  = require('../../../../dist/bs-appui.min.js');
import { EventEmitter } from 'events';
let events = new EventEmitter();

export default class ButtonPage extends Component {
	
	static defaultProps = {

	}
	componentDidMount(){
		
		
	}

	render() {
	  	
	    return (
	    	<div className="views">
			    <Container>
			    	<PageContainer>
			    		<Page>
							<AppUI.Button text="ddd" />
			    		</Page>
			    	</PageContainer>
			    </Container>
			    
			</div>
	     );
  }
}
