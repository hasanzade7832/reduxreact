import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterSlice";
import { mainSlice } from "./mainSlice";
import todoSlice from "./configurationSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    displayHeader: mainSlice.reducer,
    subTabName: mainSlice.reducer,
    displaySplitter: mainSlice.reducer,
    mainTab: mainSlice.reducer,
    resetSubTab: mainSlice.reducer,
    dataConfiguration: todoSlice.reducer,
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
};
export type AppDispatch = typeof store.dispatch;
