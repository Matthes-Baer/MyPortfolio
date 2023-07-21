import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const TIMELINE_LOAD_SLICE = createSlice({
  name: "timeline_load_slice",
  initialState: { value: true },
  reducers: {
    change_timeline_loading_state: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { change_timeline_loading_state } = TIMELINE_LOAD_SLICE.actions;
export default TIMELINE_LOAD_SLICE.reducer;
