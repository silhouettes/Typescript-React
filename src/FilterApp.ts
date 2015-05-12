import FilterFooter = require("./FilterFooter");
import FilterInput = require("./FilterInput");
import FilterList = require("./FilterList");
import MovieStore = require("./MovieStore");
import Profiler = require("./Profiler");
import PureComponent = require("./utils/PureComponent");
import ES6Utils = require("./utils/ES6Utils");
import React = require("react/addons");
import Reflux = require("reflux");

class FilterApp extends PureComponent<{}, any> {
    private _handleChange: React.FormEventHandler;
    private _handleRateChange: React.FormEventHandler;

    constructor() {
        super();

        this.state = {
            data: MovieStore.currentState,
            query: "",
            rateLimit: false
        };

        // Bind the event handlers in the constructor
        // so that they aren't re-created on every render
        this._handleChange = this.handleChange.bind(this);
        this._handleRateChange = this.handleRateChange.bind(this);
    }

    private handleChange(event: React.FormEvent): void {
        this.setState({ query: (<HTMLInputElement>event.target).value });
    }

    private handleRateChange(event: React.FormEvent): void {
        this.setState({ rateLimit: (<HTMLInputElement>event.target).checked })
    }

    render() {
        var exclusionCount = this.state.data.get("exclusions").size;
        
        return React.jsx(`
            <div>
                <h1>Movie recommendations</h1>
                <FilterInput
                    onChange={this._handleChange}
                    onRateChange={this._handleRateChange} />
                <FilterList
                    data={this.state.data}
                    query={this.state.query}
                    rateLimit={this.state.rateLimit} />
                <FilterFooter
                    excluded={exclusionCount} />
                <Profiler />
            </div>
        `);
    }
};

// This hooks up the FilterApp component to the MovieStore,
// which forces a re-render of the app whenever state is change
ES6Utils.assign(FilterApp.prototype,
              Reflux.connect(MovieStore, "data"));

export = FilterApp;
