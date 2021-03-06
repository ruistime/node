/**
 * Created by liubo on 15/8/12.
 */
var webpack = require("webpack");

var config = Object.create(
    require("./webpack.config")
);

config.output.filename = "bs-appui.min.js";
config.output.sourceMapFilename = "bs-appui.js.map";
config.devtool = "source-map";
config.plugins = [
    //new webpack.IgnorePlugin(/react/)
    //new webpack.optimize.OccurenceOrderPlugin(),
    //new webpack.optimize.DedupePlugin(),
    //new webpack.optimize.AggressiveMergingPlugin(),
    //new webpack.optimize.UglifyJsPlugin({
    //    compress: {
    //        warnings: false
    //    }
    //})
];

module.exports = config;