import React from "react";
import "./Product.css";
import { FaShoppingCart, FaCreditCard } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
 
 
import productdata from "../constant/productdata";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart, removeFromCart } from "../redux/Cartslice";
import { addFavourite,dislikeCartproduct } from "../redux/Cartslice";
import { Navigate } from "react-router-dom";

const Product = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const likedProducts = useSelector((state) => state.cart.likedItems);
  const dispatch = useDispatch();

  const addCart = (item) => {
    dispatch(addtoCart(item));
  };
  const removeCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const addLikeCart = (item) => {
    console.log(addLikeCart)
    dispatch(addFavourite(item));
  };
  const disLikeCart = (id) => {
    dispatch(dislikeCartproduct(id));
  };

  return (
    <>
      <Helmet>
        <title>Products</title>
      </Helmet>
      <div className="body">
        <div className="product-page">
          <h1>Product Details</h1>
        {productdata.map((item) => {
        const isLiked = likedProducts.some(
          (i) => i.id === item.id
        );
         return (
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
                 {isLiked ? (
                   <button onClick={() => disLikeCart(item.id)}>
                     <FaHeart /> Remove from Like
                   </button>
                 ) : (
                   <button onClick={() => addLikeCart(item)}>
                     <FaRegHeart /> Add to Like
                   </button>
                 )}
               </div>
             </div>
           </div>
         );
        })}
      

          
        </div>
      </div>
    </>
  );
};

export default Product;
