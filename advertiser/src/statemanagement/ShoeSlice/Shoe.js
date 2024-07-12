import { createReducer, createSlice } from "@reduxjs/toolkit";
import { getAllShoes, getShoeById, getShoeByIdOnPageLoad, getTopShoe } from "./index";

const initialState = {
  error: null,
  shoeData: [],
  loading: false
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
  }
})

export const shoeReducer = shoeSlice.reducer;
