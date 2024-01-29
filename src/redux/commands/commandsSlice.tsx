import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import projectServices from "../../components/services/project.services";

export const fetchCommands = createAsyncThunk("fetchCommands", async () => {
  try {
    const response = await projectServices.getAllCommand();
    console.log("cccccccc",response.data);
    return response.data;
  } catch (error) {
    ////console.error("Hata:", error);
    throw error;
  }
});

export const fetchViewMode = createAsyncThunk("fetchViewMode", async () => {
  try {
    const response = await projectServices.getEnum({ str: "ViewMode" })
    console.log("cccccccccccc",response.data)
    return response.data;
  } catch (error) {
    ////console.error("Hata:", error);
    throw error;
  }
});

interface MainState {
  isLoading:Boolean,
  dataCommands: string[],
  dataViewMode:string[],
  headersString:string,
  fieldColumn:string
};

const initialState: MainState = {
  isLoading: false,
  dataCommands: [],
  dataViewMode:[],
  headersString: "",
  fieldColumn: "",
};

const commandsSlice = createSlice({
  name: "Commands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommands.fulfilled, (state, action) => {
      state.dataCommands = action.payload;
      state.headersString = "Name|Description";
      state.fieldColumn = "Name|Description";
    });
    builder.addCase(fetchViewMode.fulfilled, (state, action) => {
      state.dataViewMode = action.payload;
    });
  },

});

export default commandsSlice;
