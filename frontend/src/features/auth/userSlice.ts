import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "./authTypes";
import { getUser } from "./authService";
import { updateUserService } from "./userService";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: getUser() 
  },
  reducers: {
    updateUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      updateUserService(action.payload);
    },
  }
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;