import { createSlice } from "@reduxjs/toolkit";
// import Category from '../pages/Category'

const initialState = {
  items: [],
};

export const addSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    additems: (state, action) => {
      console.log(action.payload);
      state.items.push(action.payload);
    },
    
  },
});

// Action creators are generated for each case reducer function
export const { additems } = addSlice.actions;

export default addSlice.reducer;