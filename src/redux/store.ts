import { configureStore } from "@reduxjs/toolkit";
import roleReducer from "./reudcers/role";

const store = configureStore({
  reducer: {
    role: roleReducer,
  },
});

export type Store = ReturnType<typeof store.getState>;

export default store;
