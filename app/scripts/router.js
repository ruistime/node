/**
 * Created by liubo on 15/7/28.
 */
const Route = ReactRouter.Route;
const DefaultRoute = ReactRouter.DefaultRoute;


import App from './app.js'
import Home from './views/home/index.js'
import Tabs from './views/tabs/index.js';
import Button from './views/button/index.js';

const routes  = (
    <Route handler={App}>
        <DefaultRoute handler={Home}/>
        <Route path="/" name="home" handler={Home}/>
        <Route path="tabs" name="tabs" handler={Tabs}/>
        <Route path="button" name="button" handler={Button}/>
    </Route>
);

export default routes;