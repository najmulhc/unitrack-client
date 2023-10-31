import { createSlice } from "@reduxjs/toolkit";
import { Role } from "../../types";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: {role:Role} = {
  role: "unassigned"
}

const roleSlice= createSlice({
  name: "role",
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<Role>) => {
     
      state.role = action.payload;
    },
  },
});

export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;
