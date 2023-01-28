import {
  ADD_TO_CART,
  FETCHING_PRODUCT,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  REMOVE_CART_PRODUCT,
} from "../actionTypes/actionTypes";

export const fetchProductsRequest = () => {
  return {
    type: FETCHING_PRODUCT,
  };
};

export const fetchProductsSuccess = (users) => {
  return {
    type: FETCH_SUCCESS,
    payload: users,
  };
};

export const fetchProductsFailure = (error) => {
  return {
    type: FETCH_FAILURE,
    payload: error,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeCartProduct = (product) => {
  return {
    type: REMOVE_CART_PRODUCT,
    payload: product,
  };
};
