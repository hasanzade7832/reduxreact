import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import projectServices from "../../components/services/project.services";

export const fetchAssignment = createAsyncThunk<AssignmentData[]>(
  "fetchAssignment",
  async () => {
    try {
      const response = await projectServices.getAllPostForAssignment();
      console.log("data", response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchAllProject = createAsyncThunk("fetchAllProject", async () => {
  try {
    const response = await projectServices.getAllProject();
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
  dataAssignment: AssignmentData[];
  dataAllProject: string[];
  selectedRowRole: string;
  selectedRowProjectName: string;
  selectedRowUser: string;
  selectedRowRoleEdit: string;
  selectedRowProjectNameEdit: string;
  headersString: string;
  fieldColumn: string;
  dialogRole: Boolean;
  nameOfDialoRole: string;
}

const initialState: MainState = {
  dataAssignment: [],
  dataAllProject: [],
  selectedRowRole: "",
  selectedRowProjectName: "",
  selectedRowUser: "",
  selectedRowRoleEdit: "",
  selectedRowProjectNameEdit: "",
  headersString: "",
  fieldColumn: "",
  dialogRole: false,
  nameOfDialoRole: "",
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
    setDialogRole: (state, action: PayloadAction<Boolean>) => {
      state.dialogRole = action.payload;
    },
    setNameOfDialoRole: (state, action: PayloadAction<string>) => {
      state.nameOfDialoRole = action.payload;
    },
    setSelectedRowProjectName: (state, action: PayloadAction<string>) => {
      state.selectedRowProjectName = action.payload;
    },
    setSelectedRowProjectNameEdit: (state, action: PayloadAction<string>) => {
      state.selectedRowProjectNameEdit = action.payload;
    },
    setSelectedRowUser: (state, action: PayloadAction<string>) => {
      state.selectedRowUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAssignment.fulfilled, (state, action) => {
      state.dataAssignment = action.payload.filter(
        (item: AssignmentData) =>
          item.OwnerName !== "" && item.OwnerName !== null
      );
      state.headersString = "ProjectName|Role|Owner|Company";
      state.fieldColumn = "nProjectName|Name|OwnerName|nCompanyName";
    });
    builder.addCase(fetchAllProject.fulfilled, (state, action) => {
      state.dataAllProject = action.payload;
    });
  },
});

export default assignmentSlice;
