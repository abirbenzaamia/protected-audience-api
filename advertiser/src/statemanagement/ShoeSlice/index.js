import * as api from '../../api/ShoeApi';
import { createAsyncThunk } from '@reduxjs/toolkit'
import { NotifyError, NotifySuccess, NotifyWarning } from '../../utils/toastify';



export const initialState = {
    error: null,
    shoeData: [],
    singleShoeData: '',
    shoeCat: [],
    loading: false
}

export const getAllShoes = createAsyncThunk('Shoe/getAllShoe', async ({ id, brand, category, price, description, image_link }, { rejectWithValue }) => {
    try {
        const data = await api.GetAllShoes({ id, brand, category, price, description, image_link});
        //console.log('hhhh')
        //console.log(data)
        return data;
    } catch (error) {
        console.log( error + ' error while getting shoes data')
        if (error?.response?.status >= 400 && error?.response?.status <= 500) {
            NotifyWarning(error?.response?.data?.message || "Error please  reload page")
            return rejectWithValue(error?.response?.data?.message || "Error please  reload page");
        } else {
            NotifyError(error.message)
            return rejectWithValue(error.message)
        }
    }
}
);

export const getShoeById = createAsyncThunk('Shoe/getShoeById', async (shoeId, { rejectWithValue }) => {
    try {
        const { data: { data, message } } = await api.GetShoeById(shoeId);
        NotifySuccess(message);
        return data;
    } catch (error) {
        if (error?.response?.status >= 400 && error?.response?.status <= 500) {
            NotifyWarning(error?.response?.data?.message || "Error please  reload page")
            return rejectWithValue(error?.response?.data?.message || "Error please  reload page");
        } else {
            NotifyError(error.message)
            return rejectWithValue(error.message)
        }
    }
}
);

export const getShoeByCat = createAsyncThunk('Shoe/getShoeByCat', async (shoeCat, { rejectWithValue }) => {
    try {
        const data = await api.GetShoeByCategory(shoeCat);
        return data;
    } catch (error) {
        if (error?.response?.status >= 400 && error?.response?.status <= 500) {
            NotifyWarning(error?.response?.data?.message || "Error please  reload page")
            return rejectWithValue(error?.response?.data?.message || "Error please  reload page");
        } else {
            NotifyError(error.message)
            return rejectWithValue(error.message)
        }
    }
}
);

// ------------------------------

export const getTopShoe = createAsyncThunk('Shoe/getTopShoe', async (rejectWithValue) => {
    try {
        const { data: { data } } = await api.GetTopShoeAPI();
        return data;
    } catch (error) {
        if (error?.response?.status >= 400 && error?.response?.status <= 500) {
            NotifyWarning(error?.response?.data?.message || "Error please  reload page")
            return rejectWithValue(error?.response?.data?.message || "Error please  reload page");
        } else {
            NotifyError(error.message)
            return rejectWithValue(error.message)
        }
    }
}
);




export const createShoe = createAsyncThunk('Shoe/createShoe', async ({ closeModal
    , AddProductData }, { rejectWithValue }) => {
    try {
        const { data: { message } } = await api.CreateShoeAPI(AddProductData);
        closeModal();
        NotifySuccess(message);
        return;
    } catch (error) {
        if (error?.response?.status >= 400 && error?.response?.status <= 500) {
            NotifyWarning(error?.response?.data?.message || "Error please  reload page")
            return rejectWithValue(error?.response?.data?.message || "Error please  reload page");
        } else {
            NotifyError(error.message)
            return rejectWithValue(error.message)
        }
    }
}
);