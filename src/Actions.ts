import Reflux = require("reflux");

let Actions = Reflux.createActions([
    "clearExclusions",
    "excludeItem",
    "redo",
    "undo"
]);

export = Actions;
