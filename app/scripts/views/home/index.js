/**
 * Created by liubo on 15/3/12.
 */
const Link = ReactRouter.Link;
const Navigation = ReactRouter.Navigation;
const Home = React.createClass({
    mixins: [Navigation],
    render: function() {
        return (
            <div>
                <h2>组件列表</h2>
                <h3><Link to="tabs">Tabs Component</Link></h3>
                <h3><Link to="button">Button Component</Link></h3>
            </div>
        );
    }

});
export default Home;