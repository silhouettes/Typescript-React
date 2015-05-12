import React = require("react/addons");
var Perf = React.addons.Perf;

class Profiler extends React.Component<{}, any> {
    startProfiling() {
        Perf.start();
    }

    stopProfiling() {
        Perf.stop();
        Perf.printDOM(Perf.getLastMeasurements());
    }

    render() {
        return (
            <div style={styles.container}>
                <hr />
                <button onClick={this.startProfiling}>Start profiling</button>
                <button onClick={this.stopProfiling} style={styles.stopProfilingLink}>Stop profiling</button>
            </div>
        );
    }
}

var styles = {
    container: {
        marginTop: 10
    },
    stopProfilingLink: {
        marginLeft: 5
    }
}

export = Profiler;
