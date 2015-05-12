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
        let filteredList = this.props.data.get("movies")
                            .filter(m => m.get("name").toLowerCase().match(this.props.query.toLowerCase()) &&
                                         m.get("rating") > (this.props.rateLimit ? 7 : 0) &&
                                         !this.props.data.get("exclusions").contains(m.get("name")));

        // Determine the highest rating amongst the list
        let highestRating = filteredList
                            .map(i => i.get("rating"))
                            .max();

        let styleBuilder = (rating) => rating === highestRating ? styles.highestRatedMovie : {};

        let element;

        if (filteredList.size > 0) {
            // Map each filtered item to its component equivalent
            let listItems = filteredList.map((movie: any) => {
                let name: string = movie.get("name");
                let rating: number = movie.get("rating");
                let style = styleBuilder(movie.get("rating"));
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

let styles = {
    highestRatedMovie: {
        fontWeight: "bold"
    }
}

export = FilterList;
