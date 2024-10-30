// store/store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import botsReducer from './botsReducer';
import accessReducer from './accessSlice'; // Updated import for access slice

const rootReducer = combineReducers({
    bots: botsReducer,
    access: accessReducer, // Use access instead of token
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
