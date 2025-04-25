import { useSelector } from "react-redux";
import useAddMovies from "../hooks/useAddMovies";
import usePopularMovie from "../hooks/usePopularMovie";
import Header from "./Header";
import MainContainer from "./MainContainer";
import GptSearchPage from "./GptSearchPage";
function Browse() {
  const gptSelector = useSelector(store=>store.gpt.gptSearch);
  useAddMovies();
  usePopularMovie()
  return (
    <div className="browse-page position-relative">
      <Header />
      {gptSelector ? <GptSearchPage/> : <MainContainer />}
    </div>
  );
}

export default Browse;
