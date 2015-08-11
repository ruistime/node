/**
 * Created by liubo on 15/7/28.
 */
const Route = ReactRouter.Route;
const DefaultRoute = ReactRouter.DefaultRoute;


import App from './app.js'
import Home from './views/home/index.js'
import Tabs from './views/tabs/index.js';

const routes  = (
    <Route handler={App}>
        <DefaultRoute handler={Home}/>
        <Route path="/" name="home" handler={Home}/>
        <Route path="tabs" name="tabs" handler={Tabs}/>
    </Route>
);

export default routes;