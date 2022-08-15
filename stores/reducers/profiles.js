import { createSlice } from "@reduxjs/toolkit";
import { getProfile } from "../actions/profiles";

const initialState = {
  data: [],
  result: {}
};

const profile = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getProfile.fulfilled, (state, action) => {
      state.data = action.payload.results;
    });
  }
});

export { getProfile };
export default profile.reducer;