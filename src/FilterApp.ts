// import FilterFooter = require("./FilterFooter");
// import FilterInput = require("./FilterInput");
// import FilterList = require("./FilterList");
// import MovieStore = require("./MovieStore");
// import Profiler = require("./Profiler");
// import PureComponent = require("./utils/PureComponent");
import React = require("react");
// import Reflux = require("reflux");

class FilterApp extends React.Component<{},any> {
   render() {
      return <div>Hello world!</div>;
   }
}

/*
class FilterApp extends PureComponent {
    constructor() {
        super();

        this.state = {
            data: MovieStore.currentState,
            query: "",
            rateLimit: false
        };

        // Bind the event handlers in the constructor
        // so that they aren't re-created on every render
        this.handleChange = this.handleChange.bind(this);
        this.handleRateChange = this.handleRateChange.bind(this);
    }

    handleChange({ target: { value }}) {
        this.setState({ query: value });
    }

    handleRateChange({ target: { checked }}) {
        this.setState({ rateLimit: checked })
    }

    render() {
        var exclusionCount = this.state.data.get("exclusions").size;
        
        return (
            <div>
                <h1>Movie recommendations</h1>
                <FilterInput
                    onChange={this.handleChange}
                    onRateChange={this.handleRateChange} />
                <FilterList
                    data={this.state.data}
                    query={this.state.query}
                    rateLimit={this.state.rateLimit} />
                <FilterFooter
                    excluded={exclusionCount} />
                <Profiler />
            </div>
        );
    }
};

// This hooks up the FilterApp component to the MovieStore,
// which forces a re-render of the app whenever state is change
Object.assign(FilterApp.prototype,
              Reflux.connect(MovieStore, "data"));
*/

export = FilterApp;
