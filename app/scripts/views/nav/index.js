import React, { Component } from 'react';


/*var AppUI  = require('../../../../dist/bs-appui.min.js');*/
import Nav from '../../../../src/js/nav/Nav';
import NavItem from '../../../../src/js/nav/NavItem';
import Container from '../../../../src/js/layout/Container';
import PageContainer from '../../../../src/js/layout/PageContainer';
import Page from '../../../../src/js/layout/Page';


export default class ButtonPage extends Component {

	constructor(props,context){
		super(props,context);
	}

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
			    			
			    			<div className="page-content">
			    				<div className="content-block-title">左侧多图标</div>
			    				<div className="content-block">
			    					<Nav title="绩效">
					    				<NavItem icon="back" role="left" />
					    				<NavItem icon="back" role="left" />
					    				<NavItem icon="bars" role="right" />
			    					</Nav>
			    				</div>
			    				<div className="content-block-title">右侧多图标</div>
			    				<div className="content-block">
			    					<Nav title="绩效">
					    				<NavItem icon="back" role="left" />
					    				<NavItem icon="back" role="right" />
					    				<NavItem icon="bars" role="right" />
			    					</Nav>
			    				</div>
			    				<div className="content-block-title">多图标</div>
			    				<div className="content-block">
			    					<Nav title="绩效">
					    				<NavItem icon="back" role="left" />
					    				<NavItem icon="bars" role="left" />
					    				<NavItem icon="back" role="right" />
					    				<NavItem icon="bars" role="right" />
			    					</Nav>
			    				</div>
			    				<div className="content-block-title">左侧无图标</div>
			    				<div className="content-block">
			    					<Nav title="绩效">
					    				<NavItem icon="bars" role="right" />
			    					</Nav>
			    				</div>
			    				<div className="content-block-title">左侧无图标</div>
			    				<div className="content-block">
			    					<Nav title="绩效">
					    				<NavItem icon="back" text="返回" role="left" />
					    				<NavItem icon="bars" role="right" />
			    					</Nav>
			    				</div>
			    				<div className="content-block-title">无图标</div>
			    				<div className="content-block">
			    					<Nav title="绩效">
					    				<NavItem  text="返回" role="left" />
					    				<NavItem  text="菜单" role="right" />
			    					</Nav>
			    				</div>
			    			</div>


			    			
			    		</Page>
			    	</PageContainer>
			    </Container>
			    
			</div>
	     );
  }
}

