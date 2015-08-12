/**
 * Created by liubo on 15/8/12.
 */
var webpack = require("webpack");
var	path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "../src/js/index"),
    output: {
        library: "AppUI",
        libraryTarget: "umd",

        path: path.resolve(__dirname, "dist"),
        filename: "bs-appui.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/
                ,exclude: /(node_modules|bower_components)/
                ,loader: 'babel'
                ,query: {
                optional: ['runtime'],
                stage: 0
            }
            }
        ]
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
    },
    externals: {
        react: 'React'
    },
    devtool: 'eval'
};