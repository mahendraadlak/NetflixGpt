import { useSelector } from "react-redux";
import useMovieTrailor from "../hooks/useMovieTrailor";

function MovieVideo({ movieId }) {
  useMovieTrailor(movieId);

  const selector = useSelector((store) => store?.movies.nowPlayingMovieVideo);

  return (
    <div>
      <iframe
        src={"https://www.youtube.com/embed/" + selector?.key + "?autoplay=1&mute=1&loop=1&playlist=" + selector?.key + "&controls=0&modestbranding=1&rel=0&fs=0"}
        title="YouTube video player"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      
    </div>
  );
}

export default MovieVideo;
