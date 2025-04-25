import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice'
import moviesReducer from './movieSlice'
import gptReducer from './gptSearchSlice'
import configReducer from './searchSlice'
export const appStore = configureStore({
    reducer:{
        users: userReducer,
        movies : moviesReducer,
        gpt: gptReducer,
        config: configReducer
    }
})