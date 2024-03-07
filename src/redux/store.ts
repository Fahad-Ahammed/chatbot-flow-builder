import { configureStore } from "@reduxjs/toolkit";
import flowSlice from "./slices/flow-slice";

export const store = configureStore({
  reducer: {
    flow: flowSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
