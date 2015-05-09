var webpack = require("webpack");
var fs = require("fs");

var nodeModules = {};
fs.readdirSync("./node_modules")
    .filter(function (mod) {
        return mod.indexOf(".bin") === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = "commonjs " + mod;
    });

nodeModules["react"] = "commonjs react";

module.exports = {
    entry: "./src/server/Server.ts",
    output: {
        path: "./dist",
        filename: "Server.js",
        devtoolModuleFilenameTemplate: "[resource-path]"
    },
    target: "node",
    externals: nodeModules,
    module: {
        loaders: [
            { test: /\.ts$/, exclude: /node_modules/, loader: "ts-loader?compiler=jsx-typescript" }
        ]
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.ts']
    },
    devtool: "source-map",
    plugins: [
        // This ensures that runtime errors display properly mapped stacks
        new webpack.BannerPlugin("require('source-map-support').install();", {
            raw: true,
            entryOnly: true
        })
    ]
};
