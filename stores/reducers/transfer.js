import { createSlice } from "@reduxjs/toolkit";
import { getTransfer } from "../actions/transfer";

const initialState = {
  data: [],
  result: {}
};

const transfer = createSlice({
  name: 'transfer',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getTransfer.fulfilled, (state, action) => {
      state.data = action.payload.results;
    });
  }
});

export { getTransfer };
export default transfer.reducer;