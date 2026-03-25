import React from "react";
import { useEffect } from "react";
import "../pages/Product.css";
import { useDispatch, useSelector } from "react-redux";
import {
  updateQuantity,
  removeFromCart,
  calculateTotal,
  addtoCart,
  addCartFromFavorite,
  dislikeCartproduct,
} from "./Cartslice";
import productdata from "../constant/productdata";
import { FaShoppingCart, FaCreditCard } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LikeProductpage = () => {
  const { likedItems, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addCart = (item) => {
    dispatch(addCartFromFavorite(item));
    navigate("/Cartpage");
  };

  const disLikeCart = (id) => {
    dispatch(dislikeCartproduct(id));
  };

  useEffect(() => {
    dispatch(calculateTotal());
  }, [likedItems, dispatch]);

  return (
    <div className="body">
      <div className="product-page">
        <h2>🛒 Favourite</h2>

        {likedItems.length === 0 ? (
          <p>Your Favorite is empty</p>
        ) : (
          <>
            {likedItems.map((item) => (
              <div className="product-card" key={item.id}>
                <img src={item.img} className="product-image" />
                <div className="product-content">
                  <h2 className="product-name">{item.title}</h2>
                  <p className="product-category">{item.category}</p>
                  <p className="product-description">{item.des}</p>
                  <p className="product-price">{item.price}</p>
                  <div className="product-buttons">
                    <button
                      onClick={() => {
                        addCart(item);
                      }}
                      className="add-to-cart"
                    >
                      <FaShoppingCart /> Add to Cart
                    </button>
                    <button onClick={() => disLikeCart(item.id)}>
                      <FaHeart /> Remove from Like
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default LikeProductpage;
