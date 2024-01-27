import { createSlice, createAsyncThunk,PayloadAction } from "@reduxjs/toolkit";

import projectServices from "../../components/services/project.services";

export const fetchConfiguration = createAsyncThunk(
  "fetchConfiguration",
  async () => {
    try {
      const response = await projectServices.getAllSetting();
      return response.data;
    } catch (error) {
      ////console.error("Hata:", error);
      throw error;
    }
  }
);
// export const fetchConfiguration = createAsyncThunk("fetchConfiguration",projectServices.getAllMenu())
export const fetchAllRibbon = createAsyncThunk("fetchAllRibbon", async () => {
  try {
    const response = await projectServices.getAllMenu();
    return response.data;
  } catch (error) {
    ////console.error("Hata:", error);
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
      ////console.error("Hata:", error);
      throw error;
    }
  }
);

export const fetchWfTemplate= createAsyncThunk(
  "fetchWfTemplate",
  async () => {
    try {
      const response = await projectServices.getAllWfTemplate();
      return response.data;
    } catch (error) {
      ////console.error("Hata:", error);
      throw error;
    }
  }
);

export const fetchEntityType= createAsyncThunk(
  "fetchEntityType",
  async () => {
    try {
      const response = await projectServices.getAllEntityType();
      return response.data;
    } catch (error) {
      ////console.error("Hata:", error);
      throw error;
    }
  }
);

export const fetchAfBtn= createAsyncThunk(
  "fetchAfBtn",
  async () => {
    try {
      const response = await projectServices.getAllAfBtn();
      return response.data;
    } catch (error) {
      ////console.error("Hata:", error);
      throw error;
    }
  }
);



const configurationSlice = createSlice({
  name: "Configuration",
  initialState: {
    isLoading: false,
    dataConfiguration: [],
    dataRibbon: [],
    dataPrugTemplate: [],
    dataWfTemplate:[],
    dataEntityType:[],
    dataAfBtn:[],
    error: false,
    headersString: "",
    fieldColumn: "",
    selectedNames: [] as string[],
    selectedId: [] as string[],
  },
  reducers: {
    setSelectedNames: (state, action: PayloadAction<string[]>) => {
      state.selectedNames = action.payload;
    },
    setSelectedId: (state, action: PayloadAction<string[]>) => {
      state.selectedId = action.payload;
    },
  },
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
    builder.addCase(fetchAllRibbon.fulfilled, (state, action) => {
      state.dataRibbon = action.payload;
    });
    builder.addCase(fetchPrugTemplate.fulfilled, (state, action) => {
      state.dataPrugTemplate = action.payload;
    });
    builder.addCase(fetchEntityType.fulfilled, (state, action) => {
      state.dataEntityType = action.payload;
    });
    builder.addCase(fetchWfTemplate.fulfilled, (state, action) => {
      state.dataWfTemplate = action.payload;
    });
    builder.addCase(fetchAfBtn.fulfilled, (state, action) => {
      state.dataAfBtn = action.payload;
    });
    // builder.addCase(fetchConfiguration.rejected, (state, action) => {
    //   state.error = true;
    // });
    // state.columnTitle = "title|body";
  },
});

export const {
  setSelectedNames,
  setSelectedId
} = configurationSlice.actions;

export default configurationSlice;
