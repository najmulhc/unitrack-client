import { createSlice } from "@reduxjs/toolkit";
import { Role } from "../../types";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: { role: Role } = {
  role: "unassigned",
};

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<Role>) => {
      state.role = action.payload;
    },
    resetRole: (state) => {
      state.role = initialState.role;
    },
  },
});

export const { setRole, resetRole } = roleSlice.actions;
export default roleSlice.reducer;
