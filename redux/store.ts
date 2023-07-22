import { configureStore } from "@reduxjs/toolkit";
import { PROJECT_TILE_SLICE } from "./features/project_tile_slice";
import { TIMELINE_LOAD_SLICE } from "./features/timeline_load_slice";

export const store = configureStore({
  reducer: {
    project_tile_slice: PROJECT_TILE_SLICE.reducer,
    timeline_load_slice: TIMELINE_LOAD_SLICE.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; //* Typescript ReturnType
export type AppDispatch = typeof store.dispatch;
