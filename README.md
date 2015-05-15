# Installation steps:
1. Clone this repo (https://github.com/lostintangent/React.git)
2. cd into the newly created directory
3. Run "npm install" to acquire all dependencies
4. Run "npm start" to compile and run the app

If you want to use Gulp and/or Webpack directly from the terminal, make sure to install them globally using NPM.

There are three modes: release, dev, and debug. Dev and debug both have live reload and turn off minification, but debug additionally has sourcemaps (although it reloads slower). To specify the mode, run:

gulp [mode]

By default, it will be in dev mode. To access the live reload page, go to:

http://localhost:8080/webpack-dev-server/

and select the desired option.

