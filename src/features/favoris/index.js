import React from "react";
import {MovieList, SearchBar} from "../films/components";
import {FavoriList} from "./components";
import {Loading} from "../../components";

export default (props) => {
    return (
        <>
            {props.loaded ? (
                <div className="d-flex flex-row flex-fill pt-4 p-2">
                    <FavoriList
                        favoris={props.favoris}
                        removeFavori={props.removeFavori}
                    />
                </div>
            ) :
                <Loading />
            }

        </>
    )
}