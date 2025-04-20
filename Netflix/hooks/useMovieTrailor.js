import { useDispatch } from "react-redux";
import { apiOptions } from "../utils/constent";
import { playMovieVideo } from "../store/movieSlice";
import { useEffect } from "react";

const useMovieTrailor = (movieId) => {
  const dispatch = useDispatch();

  const movieKey = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      apiOptions
    );
    const apiResponse = await response.json();
    const trailerVid = apiResponse?.results.filter(
      (trailor) => trailor.type === "Trailer"
    );
    const finalTrailer = trailerVid.length ? trailerVid[0] : apiResponse[0];
    console.log("movie api", finalTrailer);
    dispatch(playMovieVideo(finalTrailer));
  };
  useEffect(() => {
    movieKey();
  }, []);
};
export default useMovieTrailor;
