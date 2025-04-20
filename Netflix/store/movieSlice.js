import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies : null,
        nowPlayingMovieVideo: null,
    },
    reducers :{
        addMovies:(state, action)=>{
           state.nowPlayingMovies = action.payload 
        },
        playMovieVideo:(state, action)=>{
            state.nowPlayingMovieVideo = action.payload
        }
    }
})
export const {addMovies, playMovieVideo}  = movieSlice.actions;
export default movieSlice.reducer