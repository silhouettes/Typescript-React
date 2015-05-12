import Reflux = require("reflux");

var Actions = Reflux.createActions([
    "clearExclusions",
    "excludeItem",
    "redo",
    "undo"
]);

export = Actions;
