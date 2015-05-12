import PureComponent = require("./utils/PureComponent");
import React = require("react/addons");

interface Props {
    onChange: React.FormEventHandler;
    onRateChange: React.FormEventHandler;
}

class FilterInput extends PureComponent<Props, void> {
    private _useReact = React;

    render() {
        return (
            <form>
                <input
                    type="text"
                    onChange={this.props.onChange}
                    placeholder="Type to search..." />
                <label>
                    <span style={styles.ratingFilterLabel}>Show only highly-rated films?</span>
                    <input
                        type="checkbox"
                        onChange={this.props.onRateChange} />
                </label>
            </form>
        );
    }
}

var styles = {
    ratingFilterLabel: {
        marginLeft: 5
    }
}

export = FilterInput;
