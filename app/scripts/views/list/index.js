import React, { Component } from 'react';

import Nav from '../../../../src/js/nav/Nav';
import NavItem from '../../../../src/js/nav/NavItem';
import Container from '../../../../src/js/layout/Container';
import PageContainer from '../../../../src/js/layout/PageContainer';
import Page from '../../../../src/js/layout/Page';

import BasicList from '../../../../src/js/list/BasicList';
import SimpleItem from '../../../../src/js/list/item/SimpleItem';
import SimpleList from '../../../../src/js/list/SimpleList';
import BasicItem from '../../../../src/js/list/item/BasicItem';
import MediaList from '../../../../src/js/list/MediaList';
import MediaItem from '../../../../src/js/list/item/MediaItem';

import GroupList from '../../../../src/js/list/GroupList';
import GroupItem from '../../../../src/js/list/item/GroupItem';
import Group from '../../../../src/js/list/item/Group';
import GroupItemTitle from '../../../../src/js/list/item/GroupItemTitle';

import ContactsList from '../../../../src/js/list/ContactsList';
import ContactsItem from '../../../../src/js/list/item/ContactsItem';

export default class ButtonPage extends Component {

	constructor(props,context){
		super(props,context);
	}

	static defaultProps = {
		datas1:[
	  	   	{
	  	   		icon:"f7",
	 	   		text:'补签',
	 	   		count:5,
	 	   		after:{
	 	   			text:"绩效"
	 	   		},
	 	   		link:true
	  	   	}
	  	],
	  	datas2:[
	  	  	{
	  	   		icon:"f7",
	  	   		link:true,
	 	   		text:'请假',
	 	   		after:{
	 	   			text:"绩任"
	 	   		},
	 	   		count:3
	  	   	}
	  	],
	  	datas3:[
	  	   	{
	  	   		icon:"f7",
	  	   		link:true,
	  	   		text:'绩效',
	  	   		after:{
	 	   			text:"测评"
	 	   		},
	  	   		count:10
	  	   	}
	  	],
	  	datas6:[
	  		{
	  			text:"Mac Pro",
	  			imgUrl:"http://lorempixel.com/160/160/people/1",
	  			subTitle:"开发首选，你值得拥有",
	  			after:{
	  				text:"RMB:12000"
	  			},
	  			link:true,
	  			content:"性能出众。还挺轻巧！赶紧来选购..."
	  		}
	  	],
	  	datas7:[
	  		{
	  			text:"Re：liugenpeng",
	  			
	  			subTitle:"xxx",
	  			after:{
	  				text:"18:34"
	  			},
	  			link:true,
	  			content:"绩效将于周二晚上上线..."
	  		},
	  		{
	  			text:"Re：liugenpeng",
	  			
	  			subTitle:"xxx",
	  			after:{
	  				text:"18:34"
	  			},
	  			link:true,
	  			content:"绩效将于周二晚上上线..."
	  		}
	  	],
	  	datas4:[
		  	{
		  		text:"A",
		  		datas:[
		  			{
		  				text:"Aaron",
		  				link:true
		  			},
		  			{
		  				text:"Abb",
		  				link:true
		  			}
		  		]

		  	},
		  	{
		  		text:"B",
		  		datas:[
		  			{
		  				text:"Baron",
		  				link:true
		  			},
		  			{
		  				text:"BBC",
		  				link:true
		  			}
		  		]

		  	}
	  	]
	}
	componentDidMount(){

	}

	
	handleBack(){
		alert("单击了返回");
	}
	
	onClick(btn){
		alert("您单击的是："+btn.props.text);
	}
	
	render() {

	    return (
	    	<div className="views">
			    <Container>
			    	<PageContainer>
			    		<Page>
			    			<Nav title="待办">
			    				<NavItem icon="back" role="left"  onClick={::this.handleBack}/>
			    				<NavItem icon="bars" role="right" />
			    			</Nav>
			    			<div className="page-content">
			    				<div className="content-block-title">普通列表(直接配置SimpleItem)</div>
			    				<div className="content-block no-padding">
			    					<BasicList >
			    						<SimpleItem text="待办" icon="f7" count="5"  link/>
			    						<BasicItem text="待办(基本样式 icon)" icon="f7"  link/>
			    						<BasicItem text="待办(不配置link)"  icon="f7"  />
			    					</BasicList>
			    					<BasicList>
			    						<SimpleItem text="已办" icon="f7" count="6"  link/>
			    					</BasicList>
			    					<BasicList>
			    						<SimpleItem text="绩效" icon="f7" count="10" link/>
			    					</BasicList>
			    				</div>
			    				<div className="content-block-title">普通列表(通过datas生成)</div>
			    				<div className="content-block no-padding">
			    					<SimpleList datas={this.props.datas1} />
			    					<SimpleList datas={this.props.datas2} />
			    					<SimpleList datas={this.props.datas3} />
			    				</div>

			    				<div className="content-block-title">分组列表</div>
			    				<div className="content-block no-padding">
			    					<GroupList>
								  		<Group text="A" key="A">
								    		<GroupItem text="ABC" link /> 
								    		<GroupItem text="ATC" link /> 
								  		</Group>
								    	<Group text="B" key="B">
								     		<GroupItem text="BBC" link /> 
								    		<GroupItem text="BTC" link /> 
								  		</Group>
								  
								 	 </GroupList>
			    				</div>

			    				<div className="content-block-title">分组列表(通过datas生成)</div>
			    				<div className="content-block no-padding">
			    					<GroupList datas={this.props.datas4} />
			    				</div>

			    				<div className="content-block-title">联系人列表(通过datas生成)</div>
			    				<div className="content-block no-padding">
			    					<ContactsList datas={this.props.datas4} />
			    				</div>	

			    				<div className="content-block-title">联系人列表</div>
			    				<div className="content-block no-padding">
			    					<ContactsList>
			    						<Group text="A" key="A">
								    		<GroupItem text="ABC" link /> 
								    		<GroupItem text="ATC" link /> 
								  		</Group>
								    	<Group text="B" key="B">
								     		<GroupItem text="BBC" link /> 
								    		<GroupItem text="BTC" link /> 
								  		</Group>
			    					</ContactsList>
			    				</div>	
			    				<div className="content-block-title">media1列表(通过datas生成)</div>
			    				<div className="content-block no-padding">
			    					<MediaList datas={this.props.datas6} />
			    				</div>

			    				
			    				<div className="content-block-title">Media列表1(扩展)</div>
			    				<div className="content-block no-padding">
			    					<MediaList>
			    						<MediaItem text="Mac Pro" imgUrl="http://lorempixel.com/160/160/people/1" after={{
			    							text:"RMB:12000"
			    						}}  subTitle="开发首选" content="据说性能挺好据说性能挺好据说性能挺好据说性能挺好据说性能挺好据说性能挺好"  link/>
			    					</MediaList>
			    				</div>

			    				<div className="content-block-title">绩效移动端</div>
			    				<div className="content-block no-padding">
			    					<MediaList>
			    						<MediaItem text="曹曼" imgUrl="http://fpoimg.com/24x24" after={{
			    							text:"技术部/产品专员"
			    						}}  subTitle="2015年产品经理年度绩效考核"  link/>
			    						<MediaItem text="曹曼" imgUrl="http://fpoimg.com/24x24" after={{
			    							text:"技术部/产品专员"
			    						}}  subTitle="2015年产品经理年度绩效考核"  link/>
			    						<MediaItem text="曹曼" imgUrl="http://fpoimg.com/24x24" after={{
			    							text:"技术部/产品专员"
			    						}}  subTitle="2015年产品经理年度绩效考核"   link/>
			    					</MediaList>
			    				</div>
			    				<div className="content-block-title">Media列表2(扩展)</div>
			    				<div className="content-block no-padding">
			    					<MediaList>
			    						<MediaItem text="Re：liugenpeng" subTitle="xx" after={{text:"17:14"}} content="请及时回复..." link/>
			    						<MediaItem text="Re：xxx" subTitle="xx" after={{text:"17:14"}} content="请及时回复..." link/>
			    					</MediaList>
			    				</div>
			    				<div className="content-block-title">Media列表2(扩展-通过datas生成)</div>
			    				<div className="content-block no-padding">
			    					<MediaList datas={this.props.datas7}/>
			    					
			    				</div>
			    			</div>	
			    		</Page>
			    	</PageContainer>
			    </Container>
			    
			</div>
	     );
  }
}

