import React , { Component , PropTypes } from 'react';
import classnames from 'classnames';
/**
 * 单个视图组件
 * 
 */
/**
 * examples:
 * 
 * <Container page="main">
 * 		<PageCotainer>
 * 			<Page>
	 *   		<NavBar />
	 *   	    <PageContainer>
	 *    		
	 * 		    </PageContainer>
	 * 		    <FooterBar />
 * 		     </Page>
 * 		</PageCotainer>
 * </ContainerView>
 */
export default class Container extends Component {
	
	render(){
		const page="index";
		return (
			<div className="view view-main">
				{this.props.children}
			</div>
		);
	}
};