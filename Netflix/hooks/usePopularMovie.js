import { useEffect } from "react";
import { apiOptions } from "../utils/constent";
import { useDispatch } from "react-redux";
import { playPopularMovie } from "../store/movieSlice";

const usePopularMovie = ()=>{
    const dispatch = useDispatch()
    const apiFunction = async()=>{
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', apiOptions);
    const responseApi = await response.json();
    console.log("popular movie",responseApi.results);
    dispatch(playPopularMovie(responseApi.results))
  }
  useEffect(()=>{
    apiFunction()
  }, [])
}

export default usePopularMovie