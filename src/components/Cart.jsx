import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const Cart = () => {
  const products = useSelector((state) => state.cart.cart);
  return (
    <div>
      <h1>{products?.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products?.map((product) => (
          <Card key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
