import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import projectServices from "../../components/services/project.services";

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  try {
    const response = await projectServices.getAllUser();
    return response.data;
  } catch (error) {
    throw error;
  }
});

interface MainState {
  dataUsers: string[];
  headersString: string;
  fieldColumn: string;
}

const initialState: MainState = {
  dataUsers: [],
  headersString: "",
  fieldColumn: "",
};

const commandsSlice = createSlice({
  name: "User",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.dataUsers = action.payload;
      state.headersString = "Username";
      state.fieldColumn = "Username";
    });
  },
});

export default commandsSlice;
