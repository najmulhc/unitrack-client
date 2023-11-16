import { configureStore } from "@reduxjs/toolkit";
import roleReducer from "./reudcers/role";
import userReducer from "./reudcers/user";
import studentReducer from "./reudcers/student";

const store = configureStore({
  reducer: {
    role: roleReducer,
    user: userReducer,
    student: studentReducer,
  },
});

export type Store = ReturnType<typeof store.getState>;

export default store;
