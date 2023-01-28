import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <h1 className="text-center font-semibold text-xl text-gray-800">
        {cart?.length === 0 ? (
          <>
            <p>Empty Cart</p>
          </>
        ) : (
          <>Cart {cart?.length}</>
        )}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
        {cart?.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
