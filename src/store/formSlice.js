import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    rangeValue: '65',
    roomValue: '',
    qtyRoomValue: '',
    dataInput: {},
  },
  reducers: {
    setRangeValue(state, action) {
      state.rangeValue = action.payload;
    },
    setRoomValue(state, action) {
      state.roomValue = action.payload;
    },
    setQtyRoomValue(state, action) {
      state.qtyRoomValue = action.payload;
    },
    setDataInput(state, action) {
      state.dataInput = action.payload;
    }
  }

  }
);

export const { setQtyRoomValue, setRangeValue, setRoomValue, setDataInput } = formSlice.actions;

export default formSlice.reducer;