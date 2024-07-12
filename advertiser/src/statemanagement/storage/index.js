import { configureStore } from '@reduxjs/toolkit'
import { shoeReducer } from '../ShoeSlice/Shoe'
import { filterReducer } from '../filterShoes'


export const store = configureStore({
    reducer: {
        shoeDetails: shoeReducer,
        filterShoes: filterReducer
    }
})

