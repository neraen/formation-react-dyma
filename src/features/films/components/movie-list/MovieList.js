import React from "react";
import {MovieElement} from "../index";


class MovieList extends React.Component{
    render() {
        return (
            <div className="w-75 d-flex flex-row flex-wrap justify-content-center">
                {this.props.movies.map((movie, index) =>
                    <MovieElement
                        key={movie.title + index}
                        movie={movie}
                        isFavori={ this.props.favoris.includes(movie.title) }
                        addFavori={ this.props.addFavori }
                        removeFavori={ this.props.removeFavori }
                        updateSelectedMovie={() => this.props.updateSelectedMovie(index)}/>)}
            </div>
        )
    }
}

export default MovieList;