import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type initialStateType = {
  readonly langState: "eng" | "ua";
};
const initialState: initialStateType = {
  langState: "eng",
};
const langSlice = createSlice({
  name: "langSlice",
  initialState,
  reducers: {
    changeLang: (state, action:PayloadAction<string>) => {
      action.payload === "eng"
        ? (state.langState = "ua")
        : (state.langState = "eng");
    },
  },
});
export default langSlice.reducer;
export const { changeLang } = langSlice.actions;
