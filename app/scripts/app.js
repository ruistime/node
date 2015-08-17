/**
 * Created by liubo on 15/7/28.
 */
const RouteHandler = ReactRouter.RouteHandler;
const App = React.createClass({
    
    render () {
        return (
            <div>
                {/*
                 next we replace `<Child>` with `this.props.children`
                 the router will figure out the children for us
                 */}
                <RouteHandler/>
            </div>
        )
    }
});

export default App;