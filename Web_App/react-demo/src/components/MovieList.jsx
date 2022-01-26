import React, { Component } from 'react'
import MovieCard from './MovieCard'
import Axios from 'axios'

class MovieList extends Component {
  state = { movies: [] }

  componentDidMount() {
    this.fetchMovies()
    
  }

  fetchMovies = () => {
    let searchText = 'sing 2'
    Axios.get(`https://www.omdbapi.com/?apikey=ead07b6&s=${searchText}`)
      .then((resp) => resp.data)
      .then((data) => data.Search)
      .then((movies) => this.setState({ movies }))
  }
  render() {
    const movieList = this.state.movies.map((m) => (
      <MovieCard movie={m} key={m.imdbID} />
    ))
    return <div className="row">{movieList}</div>
  }
}

export default MovieList
