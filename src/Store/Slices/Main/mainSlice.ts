import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type initialStateType = {
  readonly error: string | undefined;
  readonly statusMessage: "error" | "message" | "";
  readonly message: string | undefined;
  readonly enterAcc: boolean;
  readonly setting: boolean;
  readonly addWater: boolean;
  readonly editWater: boolean;
  readonly exit: boolean;
};
type changeMessageTypePayload = {
  error?: string;
  statusMessage: "error" | "message" | "";
  message?: string;
};
type changeStatusTypePayload = {
  readonly enterAcc: boolean;
  readonly name: string;
  readonly email: string;
  readonly password: number | string;
};

type menuOpenTypePayload = {
  readonly menuOpen: "setting" | "addWater" | "remove" | "editWater" | "exit";
};
const initialState: initialStateType = {
  error: "",
  statusMessage: "",
  message: "",
  enterAcc: false,
  setting: false,
  addWater: false,
  editWater: false,
  exit: false,
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
    changeStatus: (state, action: PayloadAction<changeStatusTypePayload>) => {
      state.enterAcc = action.payload.enterAcc;
      localStorage.setItem("enterAcc", `${action.payload.enterAcc}`);
    },
    openMenu: (state, action: PayloadAction<menuOpenTypePayload>) => {
      if (action.payload.menuOpen === "setting") {
        state.setting = !state.setting;
      } else if (action.payload.menuOpen === "addWater") {
        state.addWater = !state.addWater;
      } else if (action.payload.menuOpen === "editWater") {
        state.editWater = !state.editWater;
      } else if (action.payload.menuOpen === "exit") {
        state.exit = !state.exit;
      } else if (action.payload.menuOpen === "remove") {
        state.addWater = false;
        state.setting = false;
        state.editWater = false;
        state.exit = false;
      }
    },
    exitAccount: (state) => {
      state.enterAcc = false;
      state.exit = false;
      localStorage.removeItem("user");
      localStorage.removeItem("enterAcc");
    },
  },
});
export default mainSlice.reducer;
export const { changeMessage, changeStatus, openMenu, exitAccount } = mainSlice.actions;
