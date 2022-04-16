import React from "react";
import Style from './FavoriElement.module.scss'

class FavoriElement extends React.Component{
    
    render() {
        return (
            <div  className={ "bg-light d-flex flex-row " + Style.container }>
                <img width="185" src={this.props.favori.img } alt="film" className=""/>
                <div className="flex-fill d-flex flex-column p-3">
                    <h5>{this.props.favori.title }</h5>
                    <hr className="w-100"/>
                    <span className="flex-fill">{this.props.favori.details }</span>
                    <div className="d-flex flex-row justify-content-end">
                        <button className="btn btn-small btn-danger" onClick={() => this.props.removeFavori(this.props.favori.title)}>Enlever</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default FavoriElement;