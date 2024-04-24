import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "amine",
    lastName: "bbd",
    email: "",
    address: "",
    birthDay: "",
    phoneNumber: "",
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
      state.loading = false;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.address = action.payload.address;
      state.total_blood = action.payload.total_blood;
      state.birthDay = action.payload.birthDay;
      state.phoneNumber = action.payload.phoneNumber;
      state.level = action.payload.level;
      state.role = action.payload.role;
      state.isAdmin = action.payload.isAdmin;
      state.access_token = action.payload.access_token;
      state.bio = action.payload.bio;
      state.rdvs = action.payload.rdvs;
    },
    loginFailure: (state) => {
      state.loading = false;
    },
    signupStart: (state) => {
      state.loading = true;
    },
    signupSuccess: (state, action) => {
      state.loading = false;
      state.loading = false;
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
} = userSlice.actions;

export default userSlice.reducer;

export const { login, signup } = userSlice.actions;
