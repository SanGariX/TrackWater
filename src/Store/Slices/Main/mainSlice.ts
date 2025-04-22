import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type initialStateType = {
  readonly error: string | undefined  ;
  readonly statusMessage: "error" | "message" | "";
  readonly message: string | undefined;
  readonly enterAcc: boolean
};
type changeMessageTypePayload = {
  error?: string;
  statusMessage: "error" | "message" | "";
  message?: string;
};
type changeStatusTypePayload = {
  readonly enterAcc: boolean
}
const initialState: initialStateType = {
  error: "",
  statusMessage: "",
  message: "",
  enterAcc: false
};
const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {
    changeMessage: (state, action: PayloadAction<changeMessageTypePayload>) => {
      state.error = action.payload.error;
      state.statusMessage = action.payload.statusMessage;
      state.message = action.payload.message;
    },
    changeStatus: (state, action: PayloadAction<changeStatusTypePayload>) =>{
      state.enterAcc = action.payload.enterAcc;
      localStorage.setItem("enterAcc", `${action.payload.enterAcc}`)
    }
  },
});
export default mainSlice.reducer;
export const { changeMessage, changeStatus } = mainSlice.actions;
