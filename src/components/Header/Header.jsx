import React from "react";
import "./Header.css";
import logo from "../../../public/images/Logo.svg";
const Header = () => {
  return (
    <nav className="header-container">
      <img src={logo}></img>
      <div className="header-info">
        <a href="/order">Order</a>
        <a href="/order_review">Order Review</a>
        <a href="/manage_inventory">Manage Inventory</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
