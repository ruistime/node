import React , { Component , PropTypes } from 'react';
import classnames from 'classnames';
export default class TabContent extends Component {
	constructor(props,context){
		super(props,context);
		this.state = {
			complete:false
		};

	}
	shouldComponentUpdate(nextProps, nextState){
		
		return nextProps.active !== this.props.active;
	}
	componentDidMount(){
		this.setState({
			complete:true
		});
		
	}
	render(){
		
		const { active , done  } = this.props;
		
		

		return (
			<div className={classnames("page-content tab ",{
				active:active
			})}>
				{this.props.children}
			</div>
		);
	}
}