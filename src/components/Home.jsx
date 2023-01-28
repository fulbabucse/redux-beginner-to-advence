import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

  if (state?.loading) {
    return (
      <h1 className="text-xl text-center font-semibold text-gray-800">
        Loading...
      </h1>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {state?.products?.map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
