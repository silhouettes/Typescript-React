import Immutable = require("immutable");
import MovieStore = require("./MovieStore");
import FilterListItem = require("./FilterListItem");
import PureComponent = require("./utils/PureComponent");
import React = require("react/addons");

let styles = {
    highestRatedMovie: {
        fontWeight: "bold"
    }
}

interface Props {
    data: MovieStore.MovieCollection;
    query: string;
    rateLimit: boolean;
}

class FilterList extends PureComponent<Props, void> {
    render() {
        // Filter the list of data based on the current query
        let { data, query, rateLimit } = this.props;
        let filteredList: Immutable.Iterable<number, MovieStore.Movie> = data.movies
                                .filter((movie: MovieStore.Movie) => {
                                    return movie.name.toLowerCase().match(query.toLowerCase()) &&
                                         movie.rating > (rateLimit ? 7 : 0) &&
                                         !data.exclusions.contains(movie.name);
                                });

        // Determine the highest rating amongst the list
        let highestRating: number = filteredList
                            .map(i => i.get("rating"))
                            .max();

        let styleBuilder = (rating) => rating === highestRating ? styles.highestRatedMovie : {};

        let element;

        if (filteredList.size > 0) {
            // Map each filtered item to its component equivalent
            let listItems = filteredList.map((movie: MovieStore.Movie) => {
                return React.jsx(`
                    <FilterListItem
                        key={movie.name}
                        name={movie.name}
                        rating={movie.rating}
                        style={styleBuilder(movie.rating)} />
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

export = FilterList;
