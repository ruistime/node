import React , { Component , PropTypes } from 'react';
import classnames from 'classnames';
import Page from './Page';
import NavBar from '../NavBar';
export default class PageContainer extends Component {
	constructor(state,context){
		super(state,context);
		this.state = {
			add:false
		};
	}
	static propTypes = {
		page:PropTypes.string
	};
    
	addPage(){
		//改变状态
		this.setState({
			add:true,
			cls:"page-from-center-to-left"
		});
	}
	createNewPage(){
		const data = {
		  	"left":[
		        {
		  			icon:"bars",
		         	onClick:()=>{alert("xx")}
		  		  }
		     ]
		}
		return (
			<Page cls="page-from-right-to-center">
		    	<NavBar title="考试详情" data={data} />
    			<div className="page-content">
				    <div className="content-block">
				      <p className="">差评！差评！差评！</p>
				    </div>
    			</div>
		    </Page>
		);
	}
	render(){
		let con = {};
		const { add }  = this.state;
		const newPage = add ? this.createNewPage():null;
		const elArray = React.Children.map(this.props.children,function (child,index) {
			return React.cloneElement(child, {
                cls:this.state.cls
            });
		},this);
		
		return (
			<div className="pages navbar-fixed">
				{elArray}
				{newPage}
			</div>
		);
	}
};