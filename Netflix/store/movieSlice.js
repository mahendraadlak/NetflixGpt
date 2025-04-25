import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null,
        nowPlayingMovieVideo: null,
        nowPopularMovie : null,
    },
    reducers :{
        addMovies:(state, action)=>{
           state.nowPlayingMovies = action.payload 
        },
        playMovieVideo:(state, action)=>{
            state.nowPlayingMovieVideo = action.payload
        },
        playPopularMovie:(state,action)=>{
            state.nowPopularMovie = action.payload
        }
    }
})
export const {addMovies, playMovieVideo, playPopularMovie}  = movieSlice.actions;
export default movieSlice.reducer