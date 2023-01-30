import { TOGGLE_BRANDS } from "../actionTypes/actionTypes";

export const toggleBrands = (brandsName) => {
  return {
    type: TOGGLE_BRANDS,
    payload: brandsName,
  };
};
