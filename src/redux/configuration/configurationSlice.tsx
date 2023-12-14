import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import projectServices from "../../components/services/project.services";

export const fetchConfiguration = createAsyncThunk(
  "fetchConfiguration",
  async () => {
    try {
      const response = await projectServices.getAllSetting();
      return response.data;
    } catch (error) {
      console.error("Hata:", error);
      throw error;
    }
  }
);

export const fetchAllMenu = createAsyncThunk("fetchAllMenu", async () => {
  try {
    const response = await projectServices.getAllMenu();
    return response.data;
  } catch (error) {
    console.error("Hata:", error);
    throw error;
  }
});

export const fetchPrugTemplate = createAsyncThunk(
  "fetchPrugTemplate",
  async () => {
    try {
      const response = await projectServices.getAllFirstPrugTemplate();
      return response.data;
    } catch (error) {
      console.error("Hata:", error);
      throw error;
    }
  }
);

const configurationSlice = createSlice({
  name: "Configuration",
  initialState: {
    isLoading: false,
    dataConfiguration: [],
    dataMenu: [],
    dataPrugTemplate: [],
    error: false,
    headersString: "",
    fieldColumn: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(fetchConfiguration.pending, (state, action) => {
    //   state.isLoading = true;
    // });
    builder.addCase(fetchConfiguration.fulfilled, (state, action) => {
      state.isLoading = false;
      state.dataConfiguration = action.payload;
      state.headersString = "Name|Description";
      state.fieldColumn = "Name|Description";
    });
    builder.addCase(fetchAllMenu.fulfilled, (state, action) => {
      state.dataMenu = action.payload;
    });
    builder.addCase(fetchPrugTemplate.fulfilled, (state, action) => {
      state.dataPrugTemplate = action.payload;
    });

    // builder.addCase(fetchConfiguration.rejected, (state, action) => {
    //   state.error = true;
    // });
    // state.columnTitle = "title|body";
  },
});

export default configurationSlice;
