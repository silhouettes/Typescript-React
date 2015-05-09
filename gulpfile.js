var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");

var onWebPackFinished = function (done, error, stats) {
    if (error) {
    	throw new gutil.PluginError("webpack", error, { showStack: true });
    }

	var jsonStats = stats.toJson();
    if (jsonStats.errors.length > 0) {
    	console.log(jsonStats.errors.toString());
    	throw new gutil.PluginError("webpack", "Project has errors", { showStack: true });
    } else if (jsonStats.warnings.length > 0) {
    	console.log(jsonStats.warnings.toString());
    	throw new gutil.PluginError("webpack", "Project has warnings", { showStack: true });
    }

    done();
};

gulp.task("build-client", function (done) {  
    var config = require("./webpack.client.js");
    webpack(config, onWebPackFinished.bind(/*this*/ null, /*firstArg*/ done));
});

gulp.task("build-server", function (done) {
    var config = require("./webpack.server.js");
    webpack(config, onWebPackFinished.bind(/*this*/ null, /*firstArg*/ done));
});

var nodemon = require("gulp-nodemon");
gulp.task("serve", ["build"], function () {
    nodemon({
        script: "./dist/Server.js",
        watch: ["./src/Server"],
        tasks: ["build-server"]
    });
});

var sh = require("shelljs");
gulp.task("serve-webpack", function (done) {
    // The dev server's Node API doesn't support inline
    // mode so I'm just using the CLI to keep the config "clean"
    sh.exec("webpack-dev-server --hot --inline --colors --content-base='./src' --config='webpack.client.js'",
        function () { done(); });
});

gulp.task("build", ["build-client", "build-server"]);

gulp.task("default", ["serve"]);
