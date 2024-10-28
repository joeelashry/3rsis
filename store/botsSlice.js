// store/botsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const botsSlice = createSlice({
  name: 'bots',
  initialState: [],
  reducers: {
    addBot: (state, action) => {
      state.push(action.payload);
    },
    // You can add more reducers here for future actions
  },
});

export const { addBot } = botsSlice.actions;
export default botsSlice.reducer;
