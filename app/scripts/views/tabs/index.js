import React, { Component } from 'react';
import Nav from '../../../../src/js/nav/Nav';
import NavItem from '../../../../src/js/nav/NavItem';
import Container from '../../../../src/js/layout/Container';
import PageContainer from '../../../../src/js/layout/PageContainer';
import Page from '../../../../src/js/layout/Page';
import Tabs from '../../../../src/js/tabs/Tabs';
import Tab from '../../../../src/js/tabs/Tab';
//测试组件
import BookList from '../../../../src/js/tabs/BookList';
import CarShop from '../../../../src/js/tabs/CarShop';


export default class TabsPage extends Component {
	constructor(props,context){
		super(props,context);
	}
	static defaultProps = {

	}
	componentDidMount(){

		React.initializeTouchEvents(true);
	/*	let { book } = this.refs;
		book.renderComponent();*/

		let { book } = this.refs;
		 book.renderComponent();

	}
	handleBack(){
		alert("单击了返回");
	}
	onChangeTab(index){
		let { book, car} = this.refs;
		let objArr = [book,car];
		setTimeout(()=>{
			objArr[index].renderComponent();
		},0)
	}
	onInitTab(){
		let { book, car} = this.refs;
		book.renderComponent();
	}
	render() {

	    return (
	    	<div className="views">
			    <Container>
			    	<PageContainer>
			    		<Page>
			    			<Nav title="绩效">
			    				<NavItem icon="back"  role="left" onClick={::this.handleBack}/>
			    				<NavItem icon="bars"  role="right" />
			    				<NavItem icon="bars"  role="right" />
			    			</Nav>
			    			<Tabs ref="tabs" activeIndex="0" onInitTab={::this.onInitTab} onChangeTab={::this.onChangeTab}>
			    				<Tab label="未办">
			    					<BookList ref="book" />
			    				</Tab>
			    				<Tab label="已办">
			    					<CarShop ref="car"/>
			    				</Tab>
			    			</Tabs>
			    		</Page>
			    	</PageContainer>
			    </Container>
			    

			</div>
		);
	}
}
