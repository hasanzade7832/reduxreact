import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MainState {
  selectedSubTab: string;
  valueDisplayHeader: string;
  valueSplitterShow: Boolean;
  valueResetSubTab: string;
  valueMainTab: number;
  isAddClicked: Boolean;
  isEditClicked: Boolean;
  isVisibleBox: Boolean;
  selectedBoxName: string;
  selectedNameDefaultButton: string[];
  selectedNameLetterButton: string[];
  selectedNameMeetingButton: string[];
  selectedIdDefaultButton: string[];
  selectedIdLetterButton: string[];
  selectedIdMeetingButton: string[];
  nameofDialogTable: string;
  nameOfSelectedRow: string;
  defaultRibbonSelectedRow: string;
}

const initialState: MainState = {
  selectedSubTab: "",
  valueDisplayHeader: "",
  valueSplitterShow: false,
  valueResetSubTab: "",
  valueMainTab: 0,
  isAddClicked: false,
  isEditClicked: false,
  isVisibleBox: true,
  selectedBoxName: "",
  selectedNameDefaultButton: [],
  selectedNameLetterButton: [],
  selectedNameMeetingButton: [],
  selectedIdDefaultButton: [],
  selectedIdLetterButton: [],
  selectedIdMeetingButton: [],
  nameofDialogTable: "",
  nameOfSelectedRow: "",
  defaultRibbonSelectedRow: "",
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

    setSelectedBoxName: (state, action: PayloadAction<string>) => {
      state.selectedBoxName = action.payload;
    },
    setSelectedNameDefaultButton: (
      state,
      action: PayloadAction<Array<string>>
    ) => {
      state.selectedNameDefaultButton = action.payload;
    },
    setselectedNameLetterButton: (
      state,
      action: PayloadAction<Array<string>>
    ) => {
      state.selectedNameLetterButton = action.payload;
    },
    setSelectedNameMeetingButton: (
      state,
      action: PayloadAction<Array<string>>
    ) => {
      state.selectedNameMeetingButton = action.payload;
    },
    setelectedIdDefaultButton: (
      state,
      action: PayloadAction<Array<string>>
    ) => {
      state.selectedIdDefaultButton = action.payload;
    },
    setSelectedIdLetterButton: (
      state,
      action: PayloadAction<Array<string>>
    ) => {
      state.selectedIdLetterButton = action.payload;
    },
    setSelectedIdMeetingButton: (
      state,
      action: PayloadAction<Array<string>>
    ) => {
      state.selectedIdMeetingButton = action.payload;
    },
    setNameofDialogTable: (state, action: PayloadAction<string>) => {
      state.nameofDialogTable = action.payload;
    },
    setNameOfSelectedRow: (state, action: PayloadAction<string>) => {
      state.nameOfSelectedRow = action.payload;
    },
    setDefaultRibbonSelectedRow: (state, action: PayloadAction<string>) => {
      state.defaultRibbonSelectedRow = action.payload;
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
