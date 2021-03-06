///<reference path="../lib/_server-references.d.ts"/>

import Express = require("express");
import FilterApp = require("../FilterApp");
import React = require("react/addons");

// This server supports serving two things:
// 1) The app itself, which is dynamically generated using React
// 2) All of the static assets (e.g. JS, CSS) for the app

var server = Express();
server.get("/", (req: Express.Request, res: Express.Response) => {
    // 1) Generate a string of HTML that represents the
    //    the body content of the app
    var dynamicContent = React.renderToString(React.jsx(`<FilterApp />`));

    // 2) Wrap the app inside the neccesary HTML "scaffold"
    //    using static markup, since we don't need the <html>, <body>, etc.
    //    elements to include the "magic IDs" that React would add to them
    var staticContent =
        React.renderToStaticMarkup(
            React.jsx(`
                <html>
                    <head>
                        <title>Movies</title>
                        <script src="/assets/Browser.js" defer />
                    </head>
                    <body
                        dangerouslySetInnerHTML=${{
                            __html: dynamicContent
                        }}>
                    </body>
                </html>
            `)
        );

    res.header("Content-Type", "text/html");
    res.send(staticContent);
});

server.use("/assets", Express.static("./dist/assets"));

server.listen(8000);

console.log("Server listening on http://localhost:8000, press Ctrl+C to quit...");
