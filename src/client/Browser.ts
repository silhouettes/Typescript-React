///<reference path="../lib/_client-references.d.ts"/>
 
import FilterApp = require("../FilterApp");
import React = require("react/addons");

// The ReactJS CDT extension looks for this global
// in order to activate itself, and therefore, since
// we're using modules instead of globals, we need to
// artificially expose the React object in order
// to make use of the tools. Hopefully this goes away soon :)
(<any>window).react = React;

React.render(React.jsx(`<FilterApp />`), document.body);
