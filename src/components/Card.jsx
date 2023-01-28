import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart, removeCartProduct } from "../Redux/actions/productActions";

const Card = ({ product }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { title, thumbnail, description, price } = product;

  return (
    <div className="card card-compact bg-base-100 shadow-xl rounded-md">
      <figure className="w-full h-[300px]">
        <img className="w-full h-full" src={thumbnail} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title.length > 15 ? title.slice(0, 15) : title}
        </h2>
        <p>
          {description.length > 40 ? description.slice(0, 40) : description}
        </p>
        <div className="card-actions justify-between items-center">
          <p>${price}</p>
          {pathname.includes("cart") && (
            <button
              onClick={() => dispatch(removeCartProduct(product))}
              className="btn btn-sm btn-secondary rounded-md"
            >
              Remove
            </button>
          )}
          {!pathname.includes("cart") && (
            <button
              onClick={() => dispatch(addToCart(product))}
              className="btn btn-sm btn-secondary rounded-md"
            >
              Buy Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
