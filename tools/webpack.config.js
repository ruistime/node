/**
 * Created by liubo on 15/8/12.
 */
var webpack = require("webpack");
var	path = require("path");

var reactExternal = {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react'
};


module.exports = {
    entry: path.resolve(__dirname, "../src/js/index"),
    output: {
        library: "AppUI",
        libraryTarget: "commonjs2",

        path: path.resolve(__dirname, "../dist"),
        filename: "bs-appui.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/
                ,exclude: /node_modules/
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
        react: 'react'
    },
    devtool: 'eval'
};

//var ComponentPlugin = require("component-webpack-plugin");
//module.exports = {
//    module: {
//        loaders: [
//            {
//                test: /\.jsx?$/
//                ,exclude: /node_modules/
//                ,loader: 'babel'
//                ,query: {
//                    optional: ['runtime'],
//                    stage: 0
//                }
//            }
//        ]
//    },
//    plugins: [
//        new ComponentPlugin()
//    ]
//}