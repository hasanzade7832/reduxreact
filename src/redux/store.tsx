import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { mainSlice } from "./mainSlice";
import configurationSlice from "./configurationSlice";
import commentsSlice from "./commentsSlice";
import {loginSlice} from "./Login/loginSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    displayHeader: mainSlice.reducer,
    subTabName: mainSlice.reducer,
    displaySplitter: mainSlice.reducer,
    mainTab: mainSlice.reducer,
    resetSubTab: mainSlice.reducer,
    dataConfiguration: configurationSlice.reducer,
    datacomments: commentsSlice.reducer,
    dataLogin:loginSlice.reducer
  },
});

export type RootState = {
  counter: {
    value: number;
  };
  subTabName: {
    selectedSubTab: string;
  };
  displayHeader: {
    valueDisplayHeader: string;
  };
  displaySplitter: {
    valueSplitterShow: Boolean;
  };
  resetSubTab: {
    valueResetSubTab: string;
  };
  mainTab: {
    valueMainTab: number;
  };
  dataLogin: {
    userName: string;
    password: string;
    showPassword:string
  };

};
export type AppDispatch = typeof store.dispatch;
