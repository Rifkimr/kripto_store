import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./slices/authSlice";

export const { AUTH_LOGIN, AUTH_ERROR, AUTH_LOGOUT } = authSlice.actions;

export const authReducer = authSlice.reducer;

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
