import React from "react";
import "./Product.scss";

export const Product = ({ product }) => {
  return (
    <div className="product-container">
      <p>
        Name: <b>{product.title}</b>
      </p>
      <p>
        Price: <b>{product.price}</b>
      </p>
      <div className="thumbnail-container">
        <img className="thumbnail" src={product.thumbnail} alt="" />
      </div>
      <button>Dodaj do koszyka</button>
    </div>
  );
};
