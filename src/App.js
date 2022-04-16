import './index.css';
import React from "react";
import {Header} from "./components";
import apiMovie, {apiMovieMap} from "./conf/api.movie";
import Films from './features/films'
import Favoris from './features/favoris'
import {BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import apiFirebase from "./conf/api.firebase";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movies: null,
            selectedMovie: 0,
            loaded: false,
            favoris: null
        }
    }


    updateSelectedMovie = (index) => {
        this.setState({
            selectedMovie: index
        })
    }

    componentDidMount() {
        apiMovie.get('/discover/movie').then(response => response.data.results)
            .then( moviesApi => {
                const movies = moviesApi.map(apiMovieMap)
                this.updateMovies(movies)
            })
            .catch(err => console.log(err))
        apiFirebase.get('favoris.json')
                   .then( response => {
                       let favoris = response.data ? response.data : [];
                       this.updateFavori(favoris);
                   })
    }

    updateMovies = (movies) => {
        this.setState({
            movies,
            loaded: this.state.favoris !== null
        })
    }

    updateFavori = (favoris) => {
        this.setState({
            favoris,
            loaded: this.state.movies !== null
        })
    }

    addFavori = (title) => {
        const favoris = this.state.favoris.slice();
        const film = this.state.movies.find( m => m.title === title)
        favoris.push(film);
        this.setState({
            favoris
        }, () => {
            this.saveFavoris();
        })
    }

    saveFavoris = () => {
        apiFirebase.put('favoris.json', this.state.favoris);
    }

    removeFavori = (title) => {
        const favoris = this.state.favoris.slice();
        const index = this.state.favoris.findIndex( f => f.title === title)
        favoris.splice(index, 1);
        this.setState({
            favoris
        }, () => {
            this.saveFavoris();
        })
    }

    render() {

        return (
            <Router>
                <div className="App d-flex flex-column">
                    <Header/>
                    <Switch>
                        <Route path="/films" children={ (props) => {
                            return(
                                <Films
                                    {... props}
                                    movies={this.state.movies}
                                    loaded={this.state.loaded}
                                    selectedMovie={this.state.selectedMovie}
                                    favoris={this.state.favoris}
                                    udpateMovies={this.updateMovies}
                                    updateSelectedMovie={this.updateSelectedMovie}
                                    addFavori={this.addFavori}
                                    removeFavori={this.removeFavori}
                                />
                            );
                        }}/>
                        <Route path="/favoris" render={ (props) => {
                            return (<Favoris
                                {... props}
                                favoris={this.state.favoris}
                                loaded={this.state.loaded}
                                removeFavori={this.removeFavori}
                            />)
                        }}/>
                        <Redirect to="/films"/>

                    </Switch>
              </div>
            </Router>
      );
    }
}

export default App;
