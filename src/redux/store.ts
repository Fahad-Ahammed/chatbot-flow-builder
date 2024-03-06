import { configureStore } from "@reduxjs/toolkit";
import nodeSlice from "./slices/node-slice";

export const store = configureStore({
  reducer: {
    node:nodeSlice
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;