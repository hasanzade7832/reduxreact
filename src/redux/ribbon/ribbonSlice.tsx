import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import projectServices from "../../components/services/project.services";

export const fetchMenuSetting = createAsyncThunk("fetchMenuSetting", async () => {
  try {
    const response = await projectServices.getAllMenu();
    return response.data;
  } catch (error) {
    throw error;
  }
});

interface MainState {
  dataMenuSetting: string[];
}

const initialState: MainState = {
    dataMenuSetting: [],
};

const userSlice = createSlice({
  name: "Ribbon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMenuSetting.fulfilled, (state, action) => {
      state.dataMenuSetting = action.payload;
    });
  },
});

export default userSlice;
