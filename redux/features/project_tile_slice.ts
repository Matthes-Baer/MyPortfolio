import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const PROJECT_TILE_SLICE = createSlice({
  name: "project_tile_slice",
  initialState: { value: false },
  reducers: {
    change_project_tile_state: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { change_project_tile_state } = PROJECT_TILE_SLICE.actions;
export default PROJECT_TILE_SLICE.reducer;
