import Actions = require("./Actions");
import Immutable = require("immutable");
import Reflux = require("reflux");

// interface Movie
// interface extends Movie, Record
let MovieConstructor: Immutable.Record.Class = Immutable.Record({ name: "", rating: 0 });
export interface Movie extends Immutable.Record {
    name?: string;
    rating?: number;
}

let MovieCollectionConstructor: Immutable.Record.Class = Immutable.Record({ exclusions: [], movies: [] });
export interface MovieCollection extends Immutable.Record {
    exclusions?: Immutable.List<string>;
    movies?: Immutable.List<Movie>;
}

/*export class MovieClass extends Immutable.Record {
    public exclusions: Immutable.List<string>;
    public movies: Immutable.List<Movie>;
    
    public static createMovie(): MovieClass {
        return new MovieCollectionConstructor();
    }
}*/

export var store = Reflux.createStore({
    listenables: Actions,

    currentState: new MovieCollectionConstructor({
        exclusions: Immutable.List<string>(),
        movies: Immutable.List<Movie>([
            new MovieConstructor({ name: "Away From Her", rating: 8 }),
            new MovieConstructor({ name: "Big Fish", rating: 7 }),
            new MovieConstructor({ name: "Fantastic Mr. Fox", rating: 8 }),
            new MovieConstructor({ name: "Lawrence Anyways", rating: 8 }),
            new MovieConstructor({ name: "Life of Pi", rating: 6 }),
            new MovieConstructor({ name: "Memento", rating: 6 }),
            new MovieConstructor({ name: "Pan's Labyrinth", rating: 6 }),
            new MovieConstructor({ name: "Solaris", rating: 10 }),
            new MovieConstructor({ name: "The Fountain", rating: 8 }),
            new MovieConstructor({ name: "Wristcutters: A Love Story", rating: 9 })
        ])
    }),

    nextState: null,
    
    previousState: null,

    onClearExclusions: function () {
        this.previousState = this.currentState;
        this.currentState = this.currentState
                            .updateIn(["exclusions"], e => e.clear());

        this.trigger(this.currentState);
    },

    onExcludeItem: function (name) {
        this.previousState = this.currentState;
        this.currentState = this.currentState
                            .updateIn(["exclusions"], e => e.push(name));

        this.trigger(this.currentState);
    },

    onRedo: function () {
        [this.previousState, this.currentState] =
            [this.currentState, this.nextState];
        
        this.trigger(this.currentState);
    },

    onUndo: function () {
        [this.nextState, this.currentState] =
            [this.currentState, this.previousState];
        
        this.trigger(this.currentState);
    }
});
