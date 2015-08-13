import React , { Component , PropTypes } from 'react';
import classnames from 'classnames';

export default class BookList extends Component {
	constructor(props,context){
		super(props,context);
		this.state = {
			isRender:false
		};
	}
	
	componentDidMount(){
		
	}
	renderComponent(){
		this.setState({
			isRender:true
		});
	}
	render(){

		if(!this.state.isRender){
			return <h1 ref={this.props.ref}>未加载</h1>;
		}else{
			return <h1 ref={this.props.ref}>加载成功</h1>
		}

	}
}