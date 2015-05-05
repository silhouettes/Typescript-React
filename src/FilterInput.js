import PureComponent from "./utils/PureComponent";
import React from "react";

class FilterInput extends PureComponent {
    static get propTypes() {
        return {
            onChange: React.PropTypes.func.isRequired,
            onRateChange: React.PropTypes.func.isRequired
        };
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    onChange={this.props.onChange}
                    placeholder="Type to search..." />
                <label>
                    <span style={{ marginLeft: 5 }}>Show only highly-rated films?</span>
                    <input
                        type="checkbox"
                        onChange={this.props.onRateChange} />
                </label>
            </form>
        );
    }
}

export default FilterInput;