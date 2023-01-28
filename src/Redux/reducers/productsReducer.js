import {
  ADD_TO_CART,
  FETCHING_PRODUCT,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  REMOVE_CART_PRODUCT,
} from "../actionTypes/actionTypes";

const initialProductsState = {
  loading: true,
  products: [],
  error: "",
  cart: [],
};

export const productsReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case FETCHING_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: "",
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        products: [],
        error: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_CART_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};
