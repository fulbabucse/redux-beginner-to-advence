import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { productsReducer } from "./productsReducer";

const reducers = combineReducers({
  products: productsReducer,
  filter: filterReducer,
});

export default reducers;
