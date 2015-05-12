import Actions = require("./Actions");
import PureComponent = require("./utils/PureComponent");
import React = require("react/addons");

interface Props {
    excluded: number;
}

class FilterFooter extends PureComponent<Props, any> {
    private _useReact = React;

    render() {
        var exclusionElement;

        if (this.props.excluded) {
            exclusionElement = <a href="#" onClick={Actions.clearExclusions}>
                                Clear exclusions ({this.props.excluded})
                               </a>;
        } else {
            exclusionElement = <div>No exclusions! Exclude movies that you aren't interested in</div>;
        }

        return (
            <div>
                {exclusionElement}
                <div style={styles.undoRedoContainer}>
                    <a href="#" onClick={Actions.undo}>Undo</a>
                    <a href="#" onClick={Actions.redo} style={styles.redoLink}>Redo</a>
                </div>
            </div>
        );
    }
}

var styles = {
    redoLink: {
        marginLeft: 5
    },
    undoRedoContainer: {
        marginTop: 10
    }
}

export = FilterFooter;
