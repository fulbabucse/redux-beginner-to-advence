// const store =
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import counterSlice from "../features/counter/counterSlice";
import filtersSlice from "../features/filters/filtersSlice";
import productsSlice from "../features/products/productsSlice";
import { logger } from "redux-logger";

const store = configureStore({
  reducer: {
    products: productsSlice,
    counter: counterSlice,
    cart: cartSlice,
    filter: filtersSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
