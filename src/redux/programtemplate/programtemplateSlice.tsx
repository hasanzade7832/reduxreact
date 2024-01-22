import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import projectServices from "../../components/services/project.services";

export const fetchProgramTemplate = createAsyncThunk(
  "fetchProgramTemplate",
  async () => {
    try {
      const response = await projectServices.getAllProgramTemplate();
      return response.data;
    } catch (error) {
      //console.error("Hata:", error);
      throw error;
    }
  }
);

const programTemplateSlice = createSlice({
  name: "ProgramTemplate",
  initialState: {
    isLoading: false,
    dataProgramTemplate: [],
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProgramTemplate.fulfilled, (state, action) => {
      state.dataProgramTemplate = action.payload;
    });
  },
});

export default programTemplateSlice;
