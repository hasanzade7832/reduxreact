import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchConfiguration = createAsyncThunk("fetchTodo", async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  return data.json();
});

const configurationSlice = createSlice({
  name: "todo",
  initialState: {
    isLoading: false,
    data: null,
    error: false,
    headersString: "bodyName|titleName",
    fieldColumn: "body|title",
  },
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(fetchConfiguration.pending, (state, action) => {
    //   state.isLoading = true;
    // });
    builder.addCase(fetchConfiguration.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.headersString = "bodyName|titleName";
      state.fieldColumn = "body|title";
    });
    // builder.addCase(fetchConfiguration.rejected, (state, action) => {
    //   state.error = true;
    // });
    // state.columnTitle = "title|body";
  },
});

export default configurationSlice;
