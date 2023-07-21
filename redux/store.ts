import { configureStore } from "@reduxjs/toolkit";
import { MAIN_LOAD_SLICE } from "./features/main_load_slice";
import { TIMELINE_LOAD_SLICE } from "./features/timeline_load_slice";

export const store = configureStore({
  reducer: {
    main_load_slice: MAIN_LOAD_SLICE.reducer,
    timeline_load_slice: TIMELINE_LOAD_SLICE.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; //* Typescript ReturnType
export type AppDispatch = typeof store.dispatch;
