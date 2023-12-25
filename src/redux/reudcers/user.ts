import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../types";

const initialState: User = {
  email: "",
  role: "unassigned", _id: ""
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.email = action.payload.email;
    },
    resetUser: (state) => {
      state.email = initialState.email;
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
