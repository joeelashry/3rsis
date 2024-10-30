// store/accessSlice.js
import { createSlice } from "@reduxjs/toolkit";

const accessSlice = createSlice({
    name: 'access',
    initialState: {
        value: null,
    },
    reducers: {
        setAccess: (state, action) => {
            state.value = action.payload;
        },
        clearAccess: (state) => {
            state.value = null;
        },
    },
});

export const { setAccess, clearAccess } = accessSlice.actions;
export default accessSlice.reducer;
