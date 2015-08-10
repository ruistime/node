/**
 * Created by liubo on 15/7/28.
 */
const Route = ReactRouter.Route;
const DefaultRoute = ReactRouter.DefaultRoute;


import App from './app.js'
import Home from './views/home/index.js'
import Todo from './views/todo/index.js';

const routes  = (
    <Route handler={App}>
        <DefaultRoute handler={Home}/>
        <Route path="/" name="home" handler={Home}/>
        <Route path="todo" name="todo" handler={Todo}/>
    </Route>
);

export default routes;