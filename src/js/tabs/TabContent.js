import React , { Component , PropTypes } from 'react';
import classnames from 'classnames';
import { EventListener } from '../utils/EventListener';
export default class TabContent extends Component {
	shouldComponentUpdate(nextProps, nextState){
		return nextProps.active !== this.props.active;
	}
	componentDidMount(){
		/*this.setState({
			done:true
		});*/
		
	}
	render(){
		
		const { active } = this.props;
		return (
			<div className={classnames("page-content tab ",{
				active:active
			})}>
				{this.props.children}
			</div>
		);
	}
}