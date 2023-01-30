import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleBrands } from "../Redux/actions/filtersActions";
import {
  fetchProductsFailure,
  fetchProductsSuccess,
} from "../Redux/actions/productActions";
import Card from "./Card";

const Home = () => {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    axios
      .get("https://shopper-s-delight-server.vercel.app/products/all")
      .then((data) => {
        dispatch(fetchProductsSuccess(data.data.products));
      })
      .catch((err) => dispatch(fetchProductsFailure(err.name)));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const state = useSelector((state) => state);
  const { brands } = state.filter.filters;

  if (state?.products?.loading) {
    return (
      <h1 className="text-xl text-center font-semibold text-gray-800">
        Loading...
      </h1>
    );
  }

  return (
    <div>
      <div className="flex justify-end mb-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => dispatch(toggleBrands("smartphones"))}
            className={`btn btn-sm ${
              brands.includes("smartphones") ? "btn-secondary" : "btn-primary"
            } rounded-full`}
          >
            smartphones
          </button>
          <button
            onClick={() => dispatch(toggleBrands("wallets"))}
            className={`btn btn-sm ${
              brands.includes("wallets") ? "btn-secondary" : "btn-primary"
            } rounded-full`}
          >
            wallets
          </button>
          <button
            onClick={() => dispatch(toggleBrands("mens-shirts"))}
            className={`btn btn-sm ${
              brands.includes("mens-shirts") ? "btn-secondary" : "btn-primary"
            } rounded-full`}
          >
            mens-shirts
          </button>
          <button
            onClick={() => dispatch(toggleBrands("laptops"))}
            className={`btn btn-sm ${
              brands.includes("laptops") ? "btn-secondary" : "btn-primary"
            } rounded-full`}
          >
            laptops
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {state?.products?.products
          ?.filter((product) => {
            if (brands.length) {
              return brands.includes(product.category);
            }
            return product;
          })
          ?.map((product) => (
            <Card key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Home;
