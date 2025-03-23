import { configureStore } from "@reduxjs/toolkit";
import langSlice from "./Slices/Lang/langSlice"
const store = configureStore({
  reducer: {
    langSlice
  },
});
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store;
