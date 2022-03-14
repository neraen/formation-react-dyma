import React from "react";
import {MovieElement} from "../index";

class MovieList extends React.Component{
    render() {
        return (
            <div className="w-75 d-flex flex-row flew-wrap align-content-start">
                {this.props.movies.map((movie, index) => <MovieElement key={movie.title + index} movie={movie} updateSelectedMovie={() => this.props.updateSelectedMovie(index)}/>)}
            </div>
        )
    }
}

export default MovieList;