import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./formSlice";
import modalSlice from "./modalSlice";

export default configureStore({
  reducer: {
    form: formSlice,
    modal: modalSlice
  }
})
