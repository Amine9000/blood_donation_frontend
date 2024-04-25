import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    birthDay: "",
    phoneNumber: "",
    total_blood: 0,
    bio: "",
    role: [],
    rdvs: [],
    level: "",
    isAdmin: false,
    access_token: "",
    loading: false,
  },
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      if (action.payload.loading) state.loading = false;
      if (action.payload.id) state.id = action.payload.id;
      if (action.payload.firstName) state.firstName = action.payload.firstName;
      if (action.payload.lastName) state.lastName = action.payload.lastName;
      if (action.payload.email) state.email = action.payload.email;
      if (action.payload.address) state.address = action.payload.address;
      if (action.payload.total_blood)
        state.total_blood = action.payload.total_blood;
      if (action.payload.birthDay) state.birthDay = action.payload.birthDay;
      if (action.payload.phoneNumber)
        state.phoneNumber = action.payload.phoneNumber;
      if (action.payload.level) state.level = action.payload.level;
      if (action.payload.role) state.role = action.payload.role;
      if (action.payload.isAdmin) state.isAdmin = action.payload.isAdmin;
      if (action.payload.access_token)
        state.access_token = action.payload.access_token;
      if (action.payload.bio) state.bio = action.payload.bio;
      if (action.payload.rdvs) state.rdvs = action.payload.rdvs;
      if (action.payload.total_blood)
        state.total_blood = action.payload.total_blood;
    },
    loginFailure: (state) => {
      state.loading = false;
    },
    signupStart: (state) => {
      state.loading = true;
    },
    signupSuccess: (state, action) => {
      state.loading = false;
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.address = action.payload.address;
      state.total_blood = action.payload.total_blood;
      state.birthDay = action.payload.birthDay;
      state.phoneNumber = action.payload.email;
      state.role = action.payload.role;
      state.isAdmin = action.payload.isAdmin;
      state.access_token = action.payload.access_token;
      state.bio = action.payload.bio;
      state.rdvs = action.payload.rdvs;
    },
    signupFailure: (state) => {
      state.loading = false;
    },
    addRdv: (state, action) => {
      state.rdvs = action.payload.rdvs;
    },
    updateTotalBlood: (state, action) => {
      if (action.payload.total_blood)
        state.total_blood = action.payload.total_blood;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  loginStart,
  loginSuccess,
  loginFailure,
  signupStart,
  signupSuccess,
  signupFailure,
  addRdv,
  updateTotalBlood,
} = userSlice.actions;

export default userSlice.reducer;
