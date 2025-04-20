import { useSelector } from "react-redux";
import MovieVideo from "./MovieVideo";
import VideoTitle from "./VideoTitle";
function MainContainer() {
  const movies = useSelector((store) => store?.movies.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[0];
  const { title, overview, id } = mainMovie;
  return (
    <div className="video-bg">
      <MovieVideo movieId={id} />
      <div className="video-content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <VideoTitle title={title} overview={overview} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
