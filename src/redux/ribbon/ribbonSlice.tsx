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
      const response = await projectServices.getMenuTabByMenuId();
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchMenuGroup = createAsyncThunk("fetchMenuGroup", async () => {
  try {
    const response = await projectServices.getMenuGroupByMenuTabId();
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const fetchMenuItem = createAsyncThunk("fetchMenuItem", async () => {
  try {
    const response = await projectServices.getMenuItemByMenuGroupID();
    return response.data;
  } catch (error) {
    throw error;
  }
});

interface MainState {
  dataMenuSetting: string[];
  dataMenuTab: string[];
  dataMenuGroup: string[];
  dataMenuItem: string[];
  selectedRowDataRibbon: null;
  activeIndex: null;
}

const initialState: MainState = {
  dataMenuSetting: [],
  dataMenuGroup: [],
  dataMenuTab: [],
  dataMenuItem: [],
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
    builder.addCase(fetchMenuGroup.fulfilled, (state, action) => {
      state.dataMenuGroup = action.payload;
    });
    builder.addCase(fetchMenuItem.fulfilled, (state, action) => {
      state.dataMenuItem = action.payload;
    });
  },
});

export default ribbonSlice;
