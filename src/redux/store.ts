import { configureStore } from "@reduxjs/toolkit";
import roleReducer from "./reudcers/role";
import userReducer from "./reudcers/user"

const store = configureStore({
  reducer: {
    role: roleReducer,
    user: userReducer
  },
});

export type Store = ReturnType<typeof store.getState>;

export default store;
