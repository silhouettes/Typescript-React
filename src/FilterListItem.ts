import Actions = require("./Actions");
import PureComponent = require("./utils/PureComponent");
import ES6Utils = require("./utils/ES6Utils");
import React = require("react/addons");

interface Props {
    name: string;
    rating: number;
    style: any;
}

class FilterListItem extends PureComponent<Props, any> {
    render() {
        var { name, rating, style } = this.props;
        var listItemStyle = ES6Utils.assign(style, styles.listItem);

        return React.jsx(`
            <li style={listItemStyle}>
                <span>{name} ({rating}/10)</span>
                <a style={styles.excludeLink} onClick={Actions.excludeItem.bind(null, name)} href="#">Exclude</a>
            </li>
        `);
    }
}

var styles = {
    excludeLink: {
        marginLeft: 5
    },
    listItem: {
        marginTop: 3
    }
}

export = FilterListItem;
