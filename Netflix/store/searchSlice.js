import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "config",
    initialState:{
        initialLang: "en",
    },
    reducers:{
       configLang:(state, action)=>{
        state.initialLang = action.payload
       }
    }
})

export const {configLang} = searchSlice.actions;
export default searchSlice.reducer