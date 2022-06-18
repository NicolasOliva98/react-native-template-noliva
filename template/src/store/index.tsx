import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { exampleSlice } from "../reducers";

const Store = configureStore({
  reducer: {
    example: exampleSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default Store;
