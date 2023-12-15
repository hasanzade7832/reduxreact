import { configureStore } from "@reduxjs/toolkit";
import { mainSlice } from "./mainSlice";
import configurationSlice from "./configuration/configurationSlice";
import { loginSlice } from "./Login/loginSlice";
import commandsSlice from "./commands/commandsSlice";

export const store = configureStore({
  reducer: {
    displayHeader: mainSlice.reducer,
    subTabName: mainSlice.reducer,
    displaySplitter: mainSlice.reducer,
    mainTab: mainSlice.reducer,
    resetSubTab: mainSlice.reducer,
    isAddClicked: mainSlice.reducer,
    isEditClicked: mainSlice.reducer,
    dataConfiguration: configurationSlice.reducer,
    dataLogin: loginSlice.reducer,
    dataCommands: commandsSlice.reducer,
  },
});

export type RootState = {
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
    showPassword: string;
  };
  isAddClicked: {
    isAddClicked: Boolean;
  };
  isEditClicked: {
    isEditClicked: Boolean;
  };
};
export type AppDispatch = typeof store.dispatch;
