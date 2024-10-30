// store/botsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const botsSlice = createSlice({
  name: 'bots',
  initialState: [],
  reducers: {
    addBot: (state, action) => {
      state.push({
        id: state.length + 1,
        name: action.payload.name,
        description: action.payload.description,
        extraInfo: action.payload.extraInfo // Store Extra Info
      });
    },
  },
});

export const { addBot } = botsSlice.actions;
export default botsSlice.reducer;
