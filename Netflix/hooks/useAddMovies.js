import { useEffect } from "react";
import { apiOptions } from "../utils/constent";
import { useDispatch } from "react-redux";
import { addMovies } from "../store/movieSlice";
const useAddMovies = ()=>{
    const dispatch = useDispatch()

    const apiFunction = async()=>{
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', apiOptions);
    const responseApi = await response.json();
    console.log(responseApi.results);
    dispatch(addMovies(responseApi.results))
  }
  useEffect(()=>{
    apiFunction()
  }, [])
}
export default useAddMovies