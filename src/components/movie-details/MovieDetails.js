import React from "react";

class MovieDetails extends React.Component{
    render() {
        return (
            <div className="w-25 bg-light border p-4 d-flex flex-column">
                <h5 className="">{this.props.movie.title}</h5>
                <hr className="w-100" />
                <div>
                    <img className="d-block mx-auto" src={this.props.movie.image} alt={this.props.movie.title}/>
                </div>
                <hr className="w-100" />
                <span className="text-secondary">{this.props.movie.details}</span>
                <span>{this.props.movie.description}</span>
            </div>
        )
    }
}

export default MovieDetails;