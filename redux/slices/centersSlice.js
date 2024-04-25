import { createSlice } from "@reduxjs/toolkit";

export const centersSlice = createSlice({
  name: "centers",
  initialState: {
    centers: [],
    regions: [],
    centers: [],
    loading: false,
    error: null,
  },
  reducers: {
    // get centers
    getCentersSuccess: (state, action) => {
      state.centers = action.payload.centers;
      state.regions = action.payload.regions;
      state.villes = action.payload.villes;
      state.loading = false;
      state.error = null;
    },
    getRegionsSuccess: (state, action) => {
      state.regions = action.payload.regions;
      state.loading = false;
      state.error = null;
    },
    getRegionsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getVillesSuccess: (state, action) => {
      state.villes = action.payload.villes;
      state.loading = false;
      state.error = null;
    },
    getVillesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getCentersFailure: (state, action) => {
      state.centers = action.payload.centers;
      state.regions = action.payload.regions;
      state.villes = action.payload.villes;
      state.loading = false;
      state.error = action.payload;
    },
    // add center
    // update center
    // delete center
  },
});

export const {
  getCentersSuccess,
  getCentersFailure,
  getRegionsSuccess,
  getRegionsFailure,
  getVillesSuccess,
  getVillesFailure,
} = centersSlice.actions;

export default centersSlice.reducer;
