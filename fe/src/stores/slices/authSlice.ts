import { IUser } from "../../interface/user";
import { setAuthToken } from "../../libs/api";
import { createSlice } from "@reduxjs/toolkit";

const initialAuthState: IUser = {
  id: 0,
  username: "",
  phone_number: "",
  email: "",
  role: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    AUTH_LOGIN: (state, action) => {
      const { id, email, username, phone_number, role } = action.payload.user;

      const { token } = action.payload;

      setAuthToken(token);
      localStorage.setItem("token", token);

      state.id = id;
      state.email = email;
      state.username = username;
      state.phone_number = phone_number;
      state.role = role;
    },
    AUTH_ERROR: () => {
      localStorage.removeItem("token");
    },
    AUTH_LOGOUT: () => {
      localStorage.removeItem("token");
    },
  },
});
