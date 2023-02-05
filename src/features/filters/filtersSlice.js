import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brands: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterBrands: (state, action) => {
      if (!state.brands.includes(action.payload)) {
        state.brands.push(action.payload);
      } else {
        state.brands = state.brands.filter((brand) => brand !== action.payload);
      }
    },
  },
});

export const { filterBrands } = filterSlice.actions;

export default filterSlice.reducer;
