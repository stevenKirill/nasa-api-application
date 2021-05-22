import {combineReducers, configureStore} from '@reduxjs/toolkit';
import asteroidsSlice from './asteroidsReducer';
import marsSlice from './marsPicturesReducer';


// создаем корневой редьюсер
const rootReducer = combineReducers({
    asteroidsReducer: asteroidsSlice.reducer,
    marsReducer: marsSlice.reducer,
});

// создаем store
// configureStore(): wraps createStore to provide simplified configuration options 
// and good defaults. It can automatically combine your slice reducers, 
// adds whatever Redux middleware you supply, includes redux-thunk by default, 
// and enables use of the Redux DevTools Extension.
export const store = configureStore({
    reducer: rootReducer,
});