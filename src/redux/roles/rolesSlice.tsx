import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import projectServices from "../../components/services/project.services";

export const fetchRoles = createAsyncThunk("fetchRoles", async () => {
  try {
    const response = await projectServices.getAllPost();
    console.log("data", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
});

interface MainState {
  dataRoles: string[];
  headersString: string;
  fieldColumn: string;
}

const initialState: MainState = {
  dataRoles: [],
  headersString: "",
  fieldColumn: "",
};

const rolesSlice = createSlice({
  name: "Roles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRoles.fulfilled, (state, action) => {
      state.dataRoles = action.payload;
      state.headersString = "Name|Description";
      state.fieldColumn = "Name|Description";
    });
  },
});

export default rolesSlice;
