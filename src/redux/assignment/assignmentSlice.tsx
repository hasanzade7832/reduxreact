import { createSlice, createAsyncThunk,PayloadAction } from "@reduxjs/toolkit";

import projectServices from "../../components/services/project.services";

export const fetchAssignment = createAsyncThunk<AssignmentData[]>("fetchAssignment", async () => {
    try {
      const response = await projectServices.getAllPostForAssignment();
      console.log("data", response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  });
  

interface AssignmentData {
    ProjectName: string;
    Role: string;
    OwnerName: string | null;
  }
  

interface MainState {
  dataAssignment:AssignmentData[];
  selectedRowRole:string;
  selectedRowRoleEdit:string;
  headersString: string;
  fieldColumn: string;
}

const initialState: MainState = {
  dataAssignment: [],
  selectedRowRole:"",
  selectedRowRoleEdit:"",
  headersString: "",
  fieldColumn: "",
};

const assignmentSlice = createSlice({
  name: "Assignment",
  initialState,
  reducers: {
    setSelectedRowRole: (state, action: PayloadAction<string>) => {
        state.selectedRowRole = action.payload;
      },
      setSelectedRowRoleEdit: (state, action: PayloadAction<string>) => {
        state.selectedRowRoleEdit = action.payload;
      },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAssignment.fulfilled, (state, action) => {
        state.dataAssignment = action.payload.filter((item: AssignmentData) => item.OwnerName !== "" && item.OwnerName !== null);
      state.headersString = "ProjectName|Role|Owner|Company";
      state.fieldColumn = "nProjectName|Name|OwnerName|nCompanyName";
    });
  },
});

export default assignmentSlice;
