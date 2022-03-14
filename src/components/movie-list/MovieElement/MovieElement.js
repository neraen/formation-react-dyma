import React from "react";
import Style from './movieElement.module.scss'

class MovieElement extends React.Component{

    mouseEnter = () => {
        this.props.updateSelectedMovie(this.props.movie.title)
    }

    render() {
        return (

            <div onMouseEnter={this.mouseEnter} className={ "bg-light d-flex flex-row" + Style.container }>
                <img width="150" height="200" src={this.props.movie.img } alt="film" className=""/>
                <div className="flex-fill d-flex flex-column p-3">
                    <h5>{this.props.movie.title }</h5>
                    <hr className="w-100"/>
                    <span className="">{this.props.movie.details }</span>
                </div>
            </div>

        );
    }
}

export default MovieElement;