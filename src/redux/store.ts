import { configureStore } from "@reduxjs/toolkit";
import roleReducer from "./reudcers/role";
import userReducer from "./reudcers/user";
import studentReducer from "./reudcers/student";
import { appApi } from "./services/apiSlice";

const store = configureStore({
  reducer: {
    role: roleReducer,
    user: userReducer,
    student: studentReducer,
    [appApi.reducerPath]: appApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware),
});

export type Store = ReturnType<typeof store.getState>;

export default store;
