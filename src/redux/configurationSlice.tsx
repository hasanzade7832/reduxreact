import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("fetchTodo", async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  return data.json();
});

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    isLoading: false,
    data: null,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(fetchTodos.pending, (state, action) => {
    //   state.isLoading = true;
    // });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    // builder.addCase(fetchTodos.rejected, (state, action) => {
    //   state.error = true;
    // });
  },
});

export default todoSlice;
