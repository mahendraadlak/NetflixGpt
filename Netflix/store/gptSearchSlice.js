import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name : "gpt",
  initialState:{
    gptSearch:false
  },
  reducers:{
    toggleGpt: (state)=>{
       state.gptSearch = !state.gptSearch 
    }
  }
})
export const {toggleGpt} = gptSearchSlice.actions
export default gptSearchSlice.reducer