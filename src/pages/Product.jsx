import React from "react";
import "./Product.css";
import { FaShoppingCart, FaCreditCard } from "react-icons/fa";
import { IoPodiumSharp } from "react-icons/io5";
import toy from "../image/toy1.jpg"
import toy1 from "../image/toy4.webp";
import toy2 from "../image/toy2.jpg";

const Product = () => {
  

  

  return (
    <div className="body">
      <div className="product-page">
        <h1>Product Details</h1>
        <div className="product-card">
          <img src={toy} className="product-image" />
          <div className="product-content">
            <h2 className="product-name">Classic Teddy Bear</h2>
            <p className="product-category">Classic</p>
            <p className="product-description">
              A soft and cuddly classic teddy bear, perfect for children of all
              ages. Made with high-quality materials for lasting comfort.
            </p>
            <p className="product-price">$25.99</p>
            <div className="product-buttons">
              <button className="add-to-cart">
                <FaShoppingCart /> Add to Cart
              </button>
              <button className="buy-now">
                <FaCreditCard /> Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="product-card">
          <img src={toy1} className="product-image" />
          <div className="product-content">
            <h2 className="product-name">cute Monster</h2>
            <p className="product-category">Classic</p>
            <p className="product-description">
              A soft and cuddly classic teddy bear, perfect for children of all
              ages. Made with high-quality materials for lasting comfort.
            </p>
            <p className="product-price">$25.99</p>
            <div className="product-buttons">
              <button className="add-to-cart">
                <FaShoppingCart /> Add to Cart
              </button>
              <button className="buy-now">
                <FaCreditCard /> Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="product-card">
          <img src={toy2} className="product-image" />
          <div className="product-content">
            <h2 className="product-name">clasic Car toys</h2>
            <p className="product-category">Classic</p>
            <p className="product-description">
              A soft and cuddly classic teddy bear, perfect for children of all
              ages. Made with high-quality materials for lasting comfort.
            </p>
            <p className="product-price">$25.99</p>
            <div className="product-buttons">
              <button className="add-to-cart">
                <FaShoppingCart /> Add to Cart
              </button>
              <button className="buy-now">
                <FaCreditCard /> Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
