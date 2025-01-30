import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    isOpen: false,
    activeOption: null,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    handleActiveOption: (state, action) => {
      state.activeOption = action.payload;
    }
  },
});

export const menuReducer = menuSlice.reducer;

export const { toggleMenu, handleActiveOption } = menuSlice.actions;
