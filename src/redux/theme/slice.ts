import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  theme: "light" | "dark";
};

const initialState: InitialState = {
  theme: "light",
};

//linear-gradient(to top, ${color === "" && theme === "dark" ? bgDark : theme === "light" && color === "" ? bgLight : color}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("dex_theme", state.theme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
