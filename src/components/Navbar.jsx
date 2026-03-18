import React from "react";
import "./Navbar.css";
import mylogo from "../image/toy-logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <img className="img" src={mylogo} alt="logo" />

        <div className="conetct">
          <input className="con-email" type="email" placeholder="Email" />
          <button className="btn">Login</button>
        </div>
        <div className="nav-list">
          <ul className="nav-list-items">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/Product">Product</Link>
            </li>
            <li className="nav-item">
              <Link to="/Service">Service</Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
