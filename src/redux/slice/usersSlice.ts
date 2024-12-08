// create slice to store data and remove data of user

import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any;
  paymetMethod: boolean;
}

const initialState: UserState = {
  user: null,
  paymetMethod: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
    paymetMethod: (state, action) => {
      state.paymetMethod = action.payload;
    },
  },
});

export const { setUser, removeUser, paymetMethod } = userSlice.actions;

export default userSlice.reducer;
