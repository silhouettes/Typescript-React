var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: "./src/client/Browser.ts",
    output: {
        path: "./dist/assets",
        filename: "Browser.js",
        devtoolModuleFilenameTemplate: "[resource-path]",
        publicPath: "/assets/"
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            include: path.join(__dirname, 'src'),
            loaders: ["react-hot", "ts-loader", "ts-jsx-loader"] }
        ]
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.ts']
    },
    devtool: "source-map"
};
