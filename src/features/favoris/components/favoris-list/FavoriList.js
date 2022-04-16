import React from "react";
import {MovieElement} from "../index";
import FavoriElement from "./FavoriElement/FavoriElement";


class FavoriList extends React.Component{
    render() {
        return (
            <div className="w-75 d-flex flex-row flex-wrap justify-content-center">
                {this.props.favoris.map((movie, index) =>
                    <FavoriElement
                        key={movie.title + index}
                        favori={movie}
                        removeFavori={ this.props.removeFavori }
                        />)}
            </div>
        )
    }
}

export default FavoriList;