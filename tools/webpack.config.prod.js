/**
 * Created by liubo on 15/8/12.
 */
module.exports = [
    require("./webpack.config")({
        minimize: false
        ,devtool: "source-map"
        ,prerender: true
    })

    ,require("./webpack.config")({
        minimize: true
        ,devtool: "source-map"
        ,prerender: true
    })
];