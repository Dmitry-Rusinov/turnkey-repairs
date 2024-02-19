import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOverlay: false,
    type: ''
  },
  reducers: {
    showOverlay(state) {
      state.isOverlay = true;
    },
    hiddenOverlay(state) {
      state.isOverlay = false;
      state.type = ''
    },
    setType(state, action) {
      state.type = action.payload;
    }
  }
});

export const { showOverlay, hiddenOverlay, setType } = modalSlice.actions;

export default modalSlice.reducer;