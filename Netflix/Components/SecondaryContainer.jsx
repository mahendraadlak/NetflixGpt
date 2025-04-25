
import { useSelector } from "react-redux";
import MovieCards from "./MovieCards"

function SecondaryContainer() {
   const movieTab = useSelector(store=>store.movies);
   console.log("movie tabs", movieTab.nowPlayingMovies)
  return (
    <div className="movie-main-wrapper">
       <MovieCards title="Now Playing" movies={movieTab.nowPlayingMovies}/> 
       <MovieCards title="Now Playing" movies={movieTab.nowPopularMovie}/>
    </div>
  )
}

export default SecondaryContainer