import React from "react";
import Style from './MovieElement.module.scss'

class MovieElement extends React.Component{

    mouseEnter = () => {
        this.props.updateSelectedMovie(this.props.movie.title)
    }

    render() {
        return (
            <div onMouseEnter={this.mouseEnter} className={ "bg-light d-flex flex-row " + Style.container }>
                <img width="185" src={this.props.movie.img } alt="film" className=""/>
                <div className="flex-fill d-flex flex-column p-3">
                    <h5>{this.props.movie.title }</h5>
                    <hr className="w-100"/>
                    <span className="flex-fill">{this.props.movie.details }</span>
                    <div className="d-flex flex-row justify-content-end">
                    { this.props.isFavori ? (
                        <button className="btn btn-small btn-danger" onClick={() => this.props.removeFavori(this.props.movie.title)}>Enlever</button>
                    ) : (
                        <button className="btn btn-small btn-primary" onClick={() => this.props.addFavori(this.props.movie.title)}>Ajouter</button>
                    )}
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieElement;