import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import projectServices from "../../components/services/project.services";

export const fetchMenuSetting = createAsyncThunk(
  "fetchMenuSetting",
  async () => {
    try {
      const response = await projectServices.getAllMenu();
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchMenuTabByMenuId = createAsyncThunk(
  "fetchMenuTabByMenuId",
  async () => {
    try {
      const response = await projectServices.getAllMenu();
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

interface MainState {
  dataMenuSetting: string[];
  dataMenuTab: string[];
  selectedRowDataRibbon: null;
  activeIndex: null;
}

const initialState: MainState = {
  dataMenuSetting: [],
  dataMenuTab: [],
  selectedRowDataRibbon: null,
  activeIndex: null,
};

const ribbonSlice = createSlice({
  name: "Ribbon",
  initialState,
  reducers: {
    setSelectedRowDataRibbon: (state, action: PayloadAction<null>) => {
      state.selectedRowDataRibbon = action.payload;
    },
    setActiveIndex: (state, action: PayloadAction<null>) => {
      state.activeIndex = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMenuSetting.fulfilled, (state, action) => {
      state.dataMenuSetting = action.payload;
    });
    builder.addCase(fetchMenuTabByMenuId.fulfilled, (state, action) => {
      state.dataMenuTab = action.payload;
    });
  },
});

export default ribbonSlice;
