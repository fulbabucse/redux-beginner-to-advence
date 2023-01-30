import axios from "axios";
import {
  fetchProductsFailure,
  fetchProductsSuccess,
} from "../actions/productActions";

const fetchProducts = () => {
  return async (dispatch, getState) => {
    try {
      const res = await axios.get(
        "https://shopper-s-delight-server.vercel.app/products/all"
      );
      if (res.data.products.length) {
        dispatch(fetchProductsSuccess(res.data.products));
      }
    } catch (error) {
      dispatch(fetchProductsFailure(error.message));
    }
  };
};

export default fetchProducts;
