import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Admin } from "../../entities/admin";
import { RootState } from "..";

export interface AuthState {
  admin: Admin | null;
}

const getAdminFromLocalStorage = (): Admin | null => {
  const admin = localStorage.getItem("admin");

  if (!admin) {
    return null;
  }

  return JSON.parse(admin);
};

const initialState: AuthState = {
  admin: getAdminFromLocalStorage(),
};

const setAdminIntoLocalStorage = (admin: Admin) => {
  localStorage.setItem("admin", JSON.stringify(admin));
};

const removeAdminFromLocalStorage = () => {
  localStorage.removeItem("admin");
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAdmin: (state, action: PayloadAction<Admin>) => {
      state.admin = action.payload;

      setAdminIntoLocalStorage(action.payload);
    },

    unsetAdmin: (state) => {
      state.admin = null;

      removeAdminFromLocalStorage();
    },
  },
});

export const { setAdmin, unsetAdmin } = authSlice.actions;

export const selectAdmin = (state: RootState) => state.auth.admin;

export default authSlice.reducer;
