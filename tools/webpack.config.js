/**
 * Created by liubo on 15/8/12.
 */
var webpack = require("webpack");
var	path = require("path");

module.exports = function(options) {

    var plugins = (options.minimize)? [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ] : [];

    return {
        entry: path.resolve(__dirname, "../src/js/index"),
        output: {
            library: "AppUI",
            libraryTarget: "umd",
            path: path.resolve(__dirname, "../dist"),
            filename: (options.minimize)? "bs-appui.min.js" : "bs-appui.js",
            sourceMapFilename: (options.minimize)? "bs-appui.min.js.map": "bs-appui.js.map"
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
        plugins:plugins,
        resolve: {
            extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
        },
        externals: {
            "react": "react",
            "react/addons": "react"
        },
        devtool: options.devtool
    }
}