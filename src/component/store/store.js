import { configureStore } from "@reduxjs/toolkit";
import itemReducer from '../slice/Slice'
export const store = configureStore({
  reducer: {
    itemReducer: itemReducer,
  },
});
