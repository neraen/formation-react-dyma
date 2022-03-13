

import React from "react";

class MovieElement extends React.Component{
    render() {
        return (
            <div className="w-25  p-2">
                <div className="card ">
                    <img src="https://images.prismic.io/mystique/5d7c09b9-40e5-4254-ae1c-2c1cb59aa898_IMG3.jpg?auto=compress,format" alt="film" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">Titre</h5>
                        <p className="card-text">Star wars</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieElement;