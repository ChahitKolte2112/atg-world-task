import { configureStore } from "@reduxjs/toolkit";

import dataSlice from "./dataSlice";
const store = configureStore({
    reducer: { details: dataSlice },
});

export default store;
