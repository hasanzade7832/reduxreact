import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MainState {
  userName: string;
  password: string;
  showPassword: boolean
}

const initialState: MainState = {
  userName: "",
  password: "",
  showPassword: false
};

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setshowPassword: (state, action) => {
      state.showPassword = action.payload;
    },
  },
});

export const { setUserName , setPassword , setshowPassword } = loginSlice.actions;
export default loginSlice.reducer;
