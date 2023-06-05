import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: 0,
  pagename:["Dashboard","Calendar","News"]
};

export const labelSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    selecValue: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { selecValue } = labelSlice.actions;
export default labelSlice.reducer;
