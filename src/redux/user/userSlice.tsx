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

export const fetchUsersToken = createAsyncThunk("fetchUsersToken", async () => {
  try {
    const response = await projectServices.getIdByUserToken();
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const fetchUserType = createAsyncThunk("fetchUserType", async () => {
  try {
    const response = await projectServices.getEnum({ str: "UserType" });
    return response.data;
  } catch (error) {
    throw error;
  }
});

interface MainState {
  dataUsers: string[];
  dataUsersToken: string[];
  dataUserType: string[];
  headersString: string;
  fieldColumn: string;
}

const initialState: MainState = {
  dataUsers: [],
  dataUsersToken: [],
  dataUserType: [],
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
      state.headersString =
        "Username|userType|Name|Family|Website|Mobile|Email|IsVisible";
      state.fieldColumn =
        "Username|userType|Name|Family|Website|Mobile|Email|IsVisible";
    });
    builder.addCase(fetchUserType.fulfilled, (state, action) => {
      state.dataUserType = action.payload;
    });
    builder.addCase(fetchUsersToken.fulfilled, (state, action) => {
      state.dataUsersToken = action.payload;
    });
  },
});

export default commandsSlice;
