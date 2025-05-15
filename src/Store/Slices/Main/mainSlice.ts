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
  readonly account: {
    readonly id: string;
    readonly email: string;
    readonly password: number | string;
    readonly name: string;
    readonly weight: number;
    readonly gender: string;
    readonly water: any[];
  };
  readonly date: string;
  readonly time: string;
};
type changeMessageTypePayload = {
  error?: string;
  statusMessage: "error" | "message" | "";
  message?: string;
};
type changeStatusTypePayload = {
  readonly enterAcc: boolean;
  readonly id: string;
  readonly email: string;
  readonly password: number | string;
  readonly name: string;
  readonly weight: number;
  readonly gender: string;
  readonly water: string[] | number[];
};
type menuOpenTypePayload = {
  readonly menuOpen: "setting" | "addWater" | "remove" | "editWater" | "exit";
};
const initialState: initialStateType = {
  // message
  error: "",
  statusMessage: "",
  message: "",
  enterAcc: false,
  // popups
  setting: false,
  addWater: false,
  editWater: false,
  exit: false,
  // account and logic
  account: {
    name: "",
    email: "",
    password: "",
    id: "",
    water: [],
    gender: "",
    weight: 0,
  },
  date: "",
  time: "",
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
      const { email, gender, id, enterAcc, name, password, weight, water } =
        action.payload;
      state.enterAcc = enterAcc;
      state.account = {
        email: email,
        gender: gender,
        id: id,
        name: name,
        password: password,
        weight: weight,
        water: water,
      };
      const time = new Date();
      state.time = `${time.getFullYear()}:${time.getMonth()}:${time.getDay()}`;
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
      state.account = {
        name: "",
        email: "",
        password: "",
        id: "",
        water: [],
        gender: "",
        weight: 0,
      };
      localStorage.removeItem("enterAcc");
      localStorage.removeItem("user");
    },
    newDate: (state) => {
      const date = new Date();
      const month = date.getMonth();
      const day = date.getDate();
      const year = date.getFullYear();
      const hours = date.getHours();
      const minut = date.getMinutes();
      state.date = `${year}:${month}:${day}:${hours}:${minut}`;
      state.time = `${year}:${month}:${day}`;
    },
    addAmountWater: (state, action) => {
      state.account.water = [action.payload, ...state.account.water];
      const user = localStorage.getItem("user");
      if (!user) return;
      localStorage.setItem(user, JSON.stringify(state.account));
    },
  },
});
export default mainSlice.reducer;
export const {
  changeMessage,
  changeStatus,
  openMenu,
  exitAccount,
  newDate,
  addAmountWater,
} = mainSlice.actions;
