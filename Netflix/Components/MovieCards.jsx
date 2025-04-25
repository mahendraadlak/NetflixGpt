import React from "react";
import MovieList from "./MovieList";

function MovieCards({ title, movies }) {
  return (
    <div className="movie-card-wrap">
      <h2>{title}</h2>
      <div className="movie-cards">
        <div className="movie-list">
          {movies?.map((movies) => (
            <MovieList movieSrc={movies.poster_path} alts={movies.title} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieCards;
