// Typescript shims for anything not available on DefinitelyTyped

declare module "reflux" {
    function createStore(...input: any[]): any;
    function createActions(...input: any[]): any;
    function connect(...input: any[]): any;
}

