import { createReducer, createSlice } from "@reduxjs/toolkit";
import { getAllShoes, getShoeByCat ,getShoeById, getShoeByIdOnPageLoad, getTopShoe } from "./index";

const initialState = {
  error: null,
  shoeData: [],
  loading: false, 
  shoeCat: []
}

const shoeSlice = createSlice({
  name: 'Shoe',
  initialState,
  reducers: {   
  },
  extraReducers: builder => {
    builder.addCase(getAllShoes.pending, (state, action) => {
        state.loading = true;
    });
    builder.addCase(getAllShoes.fulfilled, (state, action) => {
        state.loading = false;
        state.shoeData = action.payload;
        //console.log(state.shoeData)
    });
    builder.addCase(getAllShoes.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
    });
    builder.addCase(getShoeByCat.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getShoeByCat.fulfilled, (state, action) => {
        state.loading = false;
        state.shoeCat = action.payload;
        console.log('hhhhhhhhhh')
        console.log(state.shoeCat)
        //console.log(state.shoeData)
    });
    builder.addCase(getShoeByCat.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
    });
    builder.addCase(getShoeById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getShoeById.fulfilled, (state, action) => {
        state.loading = false;
        state.shoeData = action.payload;
        //console.log(state.shoeData)
    });
    builder.addCase(getShoeById.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
    });
   
   
  }
})

export const shoeReducer = shoeSlice.reducer;
