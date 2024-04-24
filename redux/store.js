import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import centersReducer from "./slices/centersSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    centers: centersReducer,
  },
});
