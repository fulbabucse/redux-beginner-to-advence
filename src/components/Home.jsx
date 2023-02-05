import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterBrands } from "../features/filters/filtersSlice";
import Card from "./Card";

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const brands = useSelector((state) => state.filter.brands);

  useEffect(() => {
    fetch("https://shopper-s-delight-server.vercel.app/products/all")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <div>
      <div className="flex items-center gap-3 my-4">
        <button
          onClick={() => dispatch(filterBrands("smartphones"))}
          className={`btn btn-sm ${
            brands.includes("smartphones") ? "btn-secondary" : "btn-primary"
          } rounded-full`}
        >
          smartphones
        </button>
        <button
          onClick={() => dispatch(filterBrands("wallets"))}
          className={`btn btn-sm ${
            brands.includes("wallets") ? "btn-secondary" : "btn-primary"
          } rounded-full`}
        >
          wallets
        </button>
        <button
          onClick={() => dispatch(filterBrands("mens-shirts"))}
          className={`btn btn-sm ${
            brands.includes("mens-shirts") ? "btn-secondary" : "btn-primary"
          } rounded-full`}
        >
          mens-shirts
        </button>
        <button
          onClick={() => dispatch(filterBrands("laptops"))}
          className={`btn btn-sm ${
            brands.includes("laptops") ? "btn-secondary" : "btn-primary"
          } rounded-full`}
        >
          laptops
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products
          ?.filter((product) => {
            if (brands.length) {
              return brands.includes(product.category);
            }
            return product;
          })
          ?.map((product) => (
            <Card key={product?._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Home;
