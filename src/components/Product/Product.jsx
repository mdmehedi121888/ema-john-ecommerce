import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";
const Product = (props) => {
  // console.log(props.product);
  const { name, price, quantity, ratings, seller, img } = props.product;
  // console.log(props);
  return (
    <div className="product">
      <img src={img}></img>
      <h4>{name}</h4>
      <p>Price:${price}</p>
      <p>Manufacturer:{seller}</p>
      <p>Seller:{seller}</p>
      <p>
        Rating:{ratings}
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </p>
      <button>
        Add to Cart
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
