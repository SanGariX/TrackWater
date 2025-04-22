import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./Slices/Main/mainSlice"
const store = configureStore({
  reducer: {
    mainSlice
  },
});
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store;
