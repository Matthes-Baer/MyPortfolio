import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const MAIN_LOAD_SLICE = createSlice({
  name: "main_load_slice",
  initialState: { value: true },
  reducers: {
    change_main_loading_state: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { change_main_loading_state } = MAIN_LOAD_SLICE.actions;
export default MAIN_LOAD_SLICE.reducer;
