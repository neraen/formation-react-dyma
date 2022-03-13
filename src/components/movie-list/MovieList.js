import React from "react";
import {MovieElement} from "../index";

class MovieList extends React.Component{
    render() {
        return (
            <div className="w-75 d-flex flex-row flew-wrap align-content-start">
                <MovieElement/>
                <MovieElement/>
                <MovieElement/>
                <MovieElement/>
                <MovieElement/>
            </div>
        )
    }
}

export default MovieList;