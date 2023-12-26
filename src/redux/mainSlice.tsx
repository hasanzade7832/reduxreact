import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MainState {
  selectedSubTab: string;
  valueDisplayHeader: string;
  valueSplitterShow: Boolean;
  valueResetSubTab: string;
  valueMainTab: number;
  isAddClicked: Boolean;
  isEditClicked: Boolean;
  isVisibleBox:Boolean;
  selectedNameDoubleBox:string[];
}

const initialState: MainState = {
  selectedSubTab: "",
  valueDisplayHeader: "",
  valueSplitterShow: false,
  valueResetSubTab: "",
  valueMainTab: 0,
  isAddClicked: false,
  isEditClicked: false,
  isVisibleBox:true,
  selectedNameDoubleBox:[]
};

export const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {
    setSubTab: (state, action: PayloadAction<string>) => {
      state.selectedSubTab = action.payload;
    },
    setDisplayHeader: (state, action: PayloadAction<string>) => {
      state.valueDisplayHeader = action.payload;
    },
    setValueShowSplitter: (state, action: PayloadAction<Boolean>) => {
      state.valueSplitterShow = action.payload;
    },
    setValueResetSubTab: (state, action: PayloadAction<string>) => {
      state.valueResetSubTab = action.payload;
    },
    setvalueMainTab: (state, action: PayloadAction<number>) => {
      state.valueMainTab = action.payload;
    },
    setIsAddClicked: (state, action: PayloadAction<Boolean>) => {
      state.isAddClicked = action.payload;
    },
    setIsEditClicked: (state, action: PayloadAction<Boolean>) => {
      state.isEditClicked = action.payload;
    },
    setIsVisibleBox: (state, action: PayloadAction<Boolean>) => {
      state.isVisibleBox = action.payload;
    },
    setSelectedNameDoubleBox: (state, action: PayloadAction<Array<string>>) => {
      state.selectedNameDoubleBox = action.payload;
    },
  },
});

export const {
  setSubTab,
  setDisplayHeader,
  setValueShowSplitter,
  setValueResetSubTab,
  setvalueMainTab,
  setIsAddClicked,
  setIsEditClicked,
} = mainSlice.actions;
export default mainSlice.reducer;
