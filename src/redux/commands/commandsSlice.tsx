import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import projectServices from "../../components/services/project.services";

export const fetchCommands = createAsyncThunk("fetchCommands", async () => {
  try {
    const response = await projectServices.getAllCommand();
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const fetchViewMode = createAsyncThunk("fetchViewMode", async () => {
  try {
    const response = await projectServices.getEnum({ str: "CmdType" })
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const fetchApiMode = createAsyncThunk("fetchApiMode", async () => {
  try {
    const response = await projectServices.getEnum({ str: "CmdType" })
    return response.data;
  } catch (error) {
    throw error;
  }
});

interface MainState {
  isLoading:Boolean,
  dataCommands: string[],
  dataViewMode:string[],
  dataApiMode:string[],
  headersString:string,
  fieldColumn:string
};

const initialState: MainState = {
  isLoading: false,
  dataCommands: [],
  dataViewMode:[],
  dataApiMode:[],
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
    builder.addCase(fetchApiMode.fulfilled, (state, action) => {
      state.dataApiMode = action.payload;
    });
  },

});

export default commandsSlice;
