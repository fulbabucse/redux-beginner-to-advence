import axios from "../../utils/axios.config";

export const fetchProducts = async () => {
  const data = await axios.get("/products/all");
  return data.data.products;
};
