import React from 'react';
import { useEffect } from 'react';
import { useDispatch ,useSelector } from 'react-redux';
import { updateQuantity, removeFromCart ,calculateTotal } from './Cartslice';

const Cartpage = () => {

    const {cartItems ,totalAmount} =useSelector((state) => state.cart);
    const dispatch =useDispatch();

    useEffect (() =>{
        dispatch(calculateTotal());
    },[cartItems,dispatch]);
  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginBottom: "20px",
            }}
          >
            <thead>
              <tr>
                <th style={{ borderBottom: "2px solid #ccc" }}>Image</th>
                <th style={{ borderBottom: "1px solid #ccc" }}>Product</th>
                <th style={{ borderBottom: "1px solid #ccc" }}>Price</th>
                <th style={{ borderBottom: "1px solid #ccc" }}>Quantity</th>
                <th style={{ borderBottom: "1px solid #ccc" }}>Total</th>
                <th style={{ borderBottom: "1px solid #ccc" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(
                (item) => (
                  console.log(item),
                  (
                    <tr key={item.id}>
                      <td>
                        <img
                          src={item.img}
                          alt={item.title}
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                            borderRadius: "10px",
                          }}
                        />
                      </td>
                      <td>{item.title}</td>
                      <td>₹{item.price}</td>
                      <td>
                        <button
                          onClick={() =>
                            dispatch(
                              updateQuantity({ id: item.id, change: -1 }),
                            )
                          }
                        >
                          -
                        </button>
                        <span style={{ margin: "0 10px" }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            dispatch(updateQuantity({ id: item.id, change: 1 }))
                          }
                        >
                          +
                        </button>
                      </td>
                      <td>₹{item.price * item.quantity}</td>
                      <td>
                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          ❌ Remove
                        </button>
                      </td>
                    </tr>
                  )
                ),
              )}
            </tbody>
          </table>

          <h3> Total Amount: ₹{totalAmount} </h3>
        </>
      )}
    </div>
  );
}

export default Cartpage;
