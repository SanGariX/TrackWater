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
    readonly sports: any;
    readonly ava: any;
  };
  readonly date: string;
  readonly time: string;
  readonly currentEdit: {
    id: number;
    date: string;
    time: string;
    valueWater: string;
  };
  readonly visualType: boolean;
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
  readonly ava: any;
  readonly sports: any;
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
    sports: "",
    ava: "",
  },
  date: "",
  time: "",
  currentEdit: {
    id: 0,
    date: "",
    time: "",
    valueWater: "",
  },
  visualType: false,
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
      const {
        email,
        gender,
        id,
        enterAcc,
        name,
        password,
        weight,
        water,
        ava,
        sports,
      } = action.payload;
      state.enterAcc = enterAcc;
      state.account = {
        email: email,
        gender: gender,
        id: id,
        name: name,
        password: password,
        weight: weight,
        water: water,
        ava: ava,
        sports: sports,
      };
      const time = new Date();
      state.time = `${time.getFullYear()}:${time.getMonth()}:${time.getDate()}`;
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
        ava: "",
        sports: "",
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
    },
    newTime: (state) => {
      const date = new Date();
      const month = date.getMonth();
      const day = date.getDate();
      const year = date.getFullYear();
      state.time = `${year}:${month}:${day}`;
    },
    addAmountWater: (state, action) => {
      state.account.water = [action.payload, ...state.account.water];
      const user = localStorage.getItem("user");
      if (!user) return;
      localStorage.setItem(user, JSON.stringify(state.account));
    },
    EditItemWater: (state, action) => {
      state.currentEdit = action.payload;
      const currentWater = state.account.water.map((item) => {
        if (item.id === state.currentEdit.id) {
          return state.currentEdit;
        }
        return item;
      });
      state.account.water = currentWater;
      localStorage.setItem(state.account.id, JSON.stringify(state.account));
    },
    deleteItemWater: (state, action) => {
      const currentWater = state.account.water.filter(
        (item) => item.id !== action.payload.id
      );
      state.account.water = currentWater;
      localStorage.setItem(state.account.id, JSON.stringify(state.account));
    },
    settingAcc: (state, action) => {
      state.account.gender = action.payload.gender;
      state.account.email = action.payload.email;
      state.account.name = action.payload.name;
      state.account.sports = action.payload.sports;
      state.account.weight = action.payload.weight;
      localStorage.setItem(state.account.id, JSON.stringify(state.account));
    },
    upDateTime: (state, { payload }) => {
      state.time = `${payload.year}:${payload.month}:${payload.day}`;
    },
    loadImage: (state, action) => {
      state.account.ava = action.payload;
      localStorage.setItem(state.account.id, JSON.stringify(state.account));
    },
    changeVisualType: (state) => {
      state.visualType = !state.visualType;
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
  newTime,
  EditItemWater,
  deleteItemWater,
  settingAcc,
  upDateTime,
  loadImage,
  changeVisualType
} = mainSlice.actions;
