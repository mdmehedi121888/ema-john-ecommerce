import React from "react";
import Order from "../Order/Order";
import Products from "../Products/Products";
import "./Shop.css";
const Shop = () => {
  return (
    <div className="shop-container">
      <Products></Products>
      <Order></Order>
    </div>
  );
};

export default Shop;
