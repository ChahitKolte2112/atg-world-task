import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
};
const dataSlice = createSlice({
    name: "contactdata",
    initialState,
    reducers: {
        adddata(state, action) {
            state.data = { ...state.data, ...action.payload };
        },
        deletedata(state) {
            state.data = null;
        },
    },
});
export const dataActions = dataSlice.actions;
export default dataSlice.reducer;
