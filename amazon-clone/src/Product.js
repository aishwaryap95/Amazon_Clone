//rfce
import React from "react";
import "./Product.css";

function Product({title, image, price, rating}) {
  return (
    <div className="product">
      <div className="product_info">

        <p>{title}</p>
        <p className="product_price">
          <small>S</small>
          <strong>{price}</strong>
        </p>

        <div className="product_rating">
          {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
          
        </div>
      </div>

      <img
        src="https://m.media-amazon.com/images/I/51PAIR77wJL.jpg"
        alt="img"
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
