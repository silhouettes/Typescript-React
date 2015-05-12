import FilterListItem = require("./FilterListItem");
import PureComponent = require("./utils/PureComponent");
import React = require("react/addons");

interface Props {
    data: any;
    query: string;
    rateLimit: boolean;
}

class FilterList extends PureComponent<Props, void> {
    render() {
        // Filter the list of data based on the current query
        var filteredList = this.props.data.get("movies")
                            .filter(m => m.get("name").toLowerCase().match(this.props.query.toLowerCase()) &&
                                         m.get("rating") > (this.props.rateLimit ? 7 : 0) &&
                                         !this.props.data.get("exclusions").contains(m.get("name")));

        // Determine the highest rating amongst the list
        var highestRating = filteredList
                            .map(i => i.get("rating"))
                            .max();

        var styleBuilder = (rating) => rating === highestRating ? styles.highestRatedMovie : {};

        var element;

        if (filteredList.size > 0) {
            // Map each filtered item to its component equivalent
            var listItems = filteredList.map((movie: any) => {
                var name: string = movie.get("name");
                var rating: number = movie.get("rating");
                var style = styleBuilder(movie.get("rating"));
                return React.jsx(`
                    <FilterListItem
                        key={name}
                        name={name}
                        rating={rating}
                        style={style} />
                `);
            });

            element = React.jsx(`<ol>{listItems}</ol>`);
        }
        else {
            element = React.jsx(`<div style={{ marginBottom: 5 }}>No recommendations match your criteria!</div>`);
        }
        
        return element;
    }
}

var styles = {
    highestRatedMovie: {
        fontWeight: "bold"
    }
}

export = FilterList;
