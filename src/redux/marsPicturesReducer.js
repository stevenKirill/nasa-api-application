import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axiosInstance from '../api/axios';
import { trimZeros } from '../utils/helpers/trimZeros';
import key from '../api/key';

const LOADING_STATES = {
    idle: 'idle',
    process: 'process',
    success: 'success',
    failed: 'failed',
}

const initialState = {
    loading: LOADING_STATES.idle,
    data: [],
    error: '',
}

export const fetchPictures = createAsyncThunk(
    'mars/fetchPictures',
     (params,thunkAPI) => {
        thunkAPI.dispatch(marsSlice.actions.startLoad())
        const {cameraName: camera, day, month, year} = params;
        return axiosInstance.get('mars-photos/api/v1/rovers/curiosity/photos', {
            params: {
                earth_date: `${year}-${trimZeros(month)}-${trimZeros(day)}`,
                camera: camera.toLowerCase(),
                api_key: key,
            }
        })
        .then((response) => {
            return response.data.photos;
        })
        .catch((err) => {
            console.error(err)
        })
    }
);

const marsSlice = createSlice({
    name: 'mars',
    initialState: initialState,
    reducers: {
        startLoad(state) {
            state.loading = LOADING_STATES.process;
        }
    },
    extraReducers: {
        [fetchPictures.fulfilled]: (state,action) => {
            state.data = action.payload
            state.loading = LOADING_STATES.success;
        },
        [fetchPictures.rejected]: (state,action) => {
            state.error = LOADING_STATES.failed;
            state.loading = LOADING_STATES.failed;
        }
    }
});

export default marsSlice;