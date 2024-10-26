import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
  initialState: 0,
  reducers: {
    increase: state => state + 1,
    reduce: state => state - 1,
  },
});


export const { increase, reduce } = counterSlice.actions;
export default counterSlice.reducer;