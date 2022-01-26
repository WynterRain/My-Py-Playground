import React from 'react'

const MovieCard = ({ movie }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{movie.Title}</h5>
          <p className="card-text">{movie.Year}</p>
        </div>
        <img src={movie.Poster} alt={movie.Title} className="card-img-top" />
      </div>
    </div>
  )
}

export default MovieCard
