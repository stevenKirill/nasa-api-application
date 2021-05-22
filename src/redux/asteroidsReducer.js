import {createSlice} from '@reduxjs/toolkit';

// начальное состояние
const initialState = {
    asteroids: [],
    loading: false,
    error: false,
    marsPictures: [],
};

// Редьюсеры для загрузки астероидов
const asteroidsSlice = createSlice({
    name: 'asteroids',
    initialState: initialState,
    reducers: {
        startLoad(state) {
            state.loading = true;
        },
        success(state,action) {
            state.loading = false;
            state.asteroids = action.payload;
            state.erorr = false;
        },
        fail(state) {
            state.error = true
        }
    }
});

export default asteroidsSlice;
export const {success,fail,startLoad} = asteroidsSlice.actions; 