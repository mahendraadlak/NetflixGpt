import useAddMovies from "../hooks/useAddMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
function Browse() {
  useAddMovies();

  return (
    <div className="browse-page position-relative">
      <Header />
      <MainContainer />
    </div>
  );
}

export default Browse;
