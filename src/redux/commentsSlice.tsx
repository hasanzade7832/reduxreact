import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchComments = createAsyncThunk("fetchTodo", async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/comments");
  return data.json();
});

const commentsSlice = createSlice({
  name: "todo",
  initialState: {
    isLoading: false,
    data: null,
    error: false,
    headersString: "names|emails",
    fieldColumn: "name|email",
  },
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(fetchComments.pending, (state, action) => {
    //   state.isLoading = true;
    // });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.headersString = "names|emails";
      state.fieldColumn = "name|email";
    });
    // builder.addCase(fetchComments.rejected, (state, action) => {
    //   state.error = true;
    // });
  },
});

export default commentsSlice;
