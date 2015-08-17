/**
 * Created by liubo on 15/3/12.
 */
const Link = ReactRouter.Link;
const Navigation = ReactRouter.Navigation;
import CSSCore from '../../../../src/js/utils/cssCore';
const Home = React.createClass({
    mixins: [Navigation],
    componentDidMount(){
      /*  let node = React.findDOMNode(this);
        
        CSSCore.addClass(node,"page-from-right-to-center");
        setTimeout(()=>{
            CSSCore.removeClass(node,"page-from-right-to-center");
        },2000)*/
    },
    render: function() {
        return (
            <div>
                <h2>组件列表</h2>
                <h3><Link to="tabs" >标签页（Tabs Component）</Link></h3>
                <h3><Link to="button" params={{userId: "123"}}>按钮（Button Component）</Link></h3>
                <h3><Link to="nav">顶部导航（Nav Component）</Link></h3>
                <h3><Link to="list">列表（List Component）</Link></h3>
                <h3><Link to="cards">卡片（Card Component）</Link></h3>
            </div>
        );
    }

});
export default Home;