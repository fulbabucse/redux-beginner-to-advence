// const store =
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import counterSlice from "../features/counter/counterSlice";
import filtersSlice from "../features/filters/filtersSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    cart: cartSlice,
    filter: filtersSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
