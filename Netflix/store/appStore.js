import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice'
import moviesReducer from './movieSlice'
export const appStore = configureStore({
    reducer:{
        users: userReducer,
        movies : moviesReducer,
    }
})