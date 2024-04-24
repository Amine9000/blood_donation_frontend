import { createSlice } from "@reduxjs/toolkit";

export const centersSlice = createSlice({
  name: "centers",
  initialState: {
    centers: [],
    loading: false,
    error: null,
  },
  reducers: {
    // get centers
    getCentersSuccess: (state, action) => {
      state.centers = action.payload;
      state.loading = false;
      state.error = null;
    },
    getCentersFailure: (state, action) => {
      state.centers = [];
      state.loading = false;
      state.error = action.payload;
    },
    // add center
    // update center
    // delete center
  },
});

export const { getCentersSuccess, getCentersFailure } = centersSlice.actions;

export default centersSlice.reducer;
