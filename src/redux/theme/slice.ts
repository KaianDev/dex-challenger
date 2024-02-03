import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  theme: "light" | "dark";
};

const initialState: InitialState = {
  theme: localStorage.dexTheme ?? "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.dexTheme = state.theme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
