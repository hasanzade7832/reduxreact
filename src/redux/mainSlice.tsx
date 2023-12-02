import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MainState {
  selectedSubTab: string; 
  valueDisplayHeader:string;
  valueSplitterShow:Boolean;
  valueResetSubTab:string;
  valueMainTab:number;
}

const initialState: MainState = {
  selectedSubTab: "",
  valueDisplayHeader:"",
  valueSplitterShow:false,
  valueResetSubTab:"",
  valueMainTab:0
};

export const mainSlice = createSlice({
  name: "mainSlice",
  initialState,
  reducers: {
    setSubTab: (state, action: PayloadAction<string>) => {
      state.selectedSubTab = action.payload;
    },
    setDisplayHeader : (state, action: PayloadAction<string>) =>{
      state.valueDisplayHeader = action.payload;
    },
    setValueShowSplitter : (state, action: PayloadAction<Boolean>) => {
      state.valueSplitterShow = action.payload;
    },
    setValueResetSubTab : (state, action: PayloadAction<string>) => {
      state.valueResetSubTab = action.payload
    },
    setvalueMainTab : (state, action: PayloadAction<number>) => {
      state.valueMainTab = action.payload
    },
  },
});

export const { setSubTab , setDisplayHeader , setValueShowSplitter , setValueResetSubTab ,setvalueMainTab } = mainSlice.actions;
export default mainSlice.reducer;
