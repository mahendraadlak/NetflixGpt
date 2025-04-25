import { listImages } from '../utils/constent'
function MovieList({movieSrc, alts}) {
  return (
    <div className='movie-card'>
     <img src={listImages + movieSrc} alt={alts}/>
  </div>
  )
}

export default MovieList