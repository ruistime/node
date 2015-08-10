/**
 * Created by liubo on 15/3/9.
 */
//require("./styles/all.scss"); //样式

import Routes from './scripts/router.js';

ReactRouter.run(Routes, ReactRouter.HashLocation, (Root) => {
    React.render(<Root/>, document.getElementById('bs-main'));
});