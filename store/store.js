// store/store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import botsReducer from './botsReducer';
import tokenReducer from './tokenSlice'; // Import the tokenSlice reducer

const rootReducer = combineReducers({
  bots: botsReducer,
  token: tokenReducer, // Add token reducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
