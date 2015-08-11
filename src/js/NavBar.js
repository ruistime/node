import React , { Component ,PropTypes } from 'react';
import classnames from 'classnames';

/**
 * 顶部导航组件
 */
export default class NavBar extends Component{
	static propTypes = {

	};
	handleClick(item){
		if(item.onClick) item.onClick();
	}
	styles(n) {
        var i, styles;
        if (n[0]) return window.getComputedStyle(n[0], null);
        else return undefined;
    }
	//组件挂载上
	componentDidMount(){

	}
	renderPadding({ position="left" , data = {} }){
		const source = data[position] ;
		if(!source) return ;
		const paddingItem = source.map((item,index)=>{
			const { text ="" ,icon = "" , url="javascript:;" , link=false} = item;
			if(!!link){//link=true
				return (
					<div className={position}>
							{text}
					</div>
				);
			}
			let element , iconElement ;
			
			iconElement = icon.length === 0 ? null:(
				<i className={classnames("icon","icon-"+icon)}></i>
			);
			if(text.length === 0){
				element = (
					<a href={url} key={index}  
					   onClick= {()=>this.handleClick(item)}  
					   className={classnames("link","icon-only")}>
                		
                		{iconElement}
            		</a>	
				);
			}else{
				element = (
					<a href={url} key={index}  className={classnames("link")}>
                		{iconElement}
               	    	<span>{text}</span>
            		</a>	
				);	
			}
			return element;
		});
		
		return (
			<div className={position}>
				{paddingItem}
			</div>
		);
	}
	renderTitle({title=""}){
		
		return title.length === 0 ? null :
		(
			<div className="center sliding">
				{title}
			</div>
		);

	}
	render(){
		const { title , link  , data } = this.props;
		 
		return (
			<div className="navbar">
				<div className="navbar-inner">
					{this.renderPadding({
						position:"left"
						,data
					})}
					{
						this.renderTitle({
							title:title
						})
					}
					{this.renderPadding({
						position:"right"
						,data
					})}
				</div>
			</div>
		);
	}
}