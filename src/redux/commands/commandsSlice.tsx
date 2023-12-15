import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import projectServices from "../../components/services/project.services";

export const fetchCommands = createAsyncThunk("fetchCommands", async () => {
  try {
    const response = await projectServices.getAllCommand();
    return response.data;
  } catch (error) {
    console.error("Hata:", error);
    throw error;
  }
});

const commandsSlice = createSlice({
  name: "Commands",
  initialState: {
    isLoading: false,
    dataCommands: [],
    error: false,
    headersString: "",
    fieldColumn: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCommands.fulfilled, (state, action) => {
      state.dataCommands = action.payload;
      state.headersString = "Name|Description";
      state.fieldColumn = "Name|Description";
    });
  },
});

export default commandsSlice;
