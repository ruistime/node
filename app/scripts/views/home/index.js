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
                    <h2>我的例子</h2>
                    <h3><Link to="todo">Todo List</Link></h3>
                </div>
            );
    }

});
export default Home;