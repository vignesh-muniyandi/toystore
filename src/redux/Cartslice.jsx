import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    cartItems:JSON.parse(localStorage.getItem("cartItems")) || [],
    likedItems:JSON.parse(localStorage.getItem("likedItems"))|| [],
    totalAmount:0,
};

const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      // save to local storage

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    addFavourite: (state, action) => {
      const item = action.payload;
      const existingItem = state.likedItems.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.likedItems.push({ ...item, quantity: 1 });
      }

      // save to local storage

      localStorage.setItem("likedItems", JSON.stringify(state.likedItems));
    },

    addCartFromFavorite: (state, action) => {
          state.likedItems = state.likedItems.filter(  (i) => i.id !== action.payload.id);
          localStorage.setItem("cartItems", JSON.stringify(state.likedItems));
              const item = action.payload;
              const existingItem = state.cartItems.find(
                (i) => i.id === item.id,
              );

              if (existingItem) {
                existingItem.quantity += 1;
              } else {
                state.cartItems.push({ ...item, quantity: 1 });
              }

              // save to local storage

              localStorage.setItem(
                "cartItems",
                JSON.stringify(state.cartItems),
              );

    },

    updateQuantity: (state, action) => {
      const { id, change } = action.payload;
      const item = state.cartItems.find((i) => i.id === id);

      if (item) {
        item.quantity += change;

        if (item.quantity < 1) {
          item.quantity = 1; //prevent going below
        }
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },


    dislikeCartproduct: (state, action) => {
      console.log(action.payload);
      state.likedItems = state.likedItems.filter(
        (i) => i.id !== action.payload,
      );

      localStorage.setItem("likedItems", JSON.stringify(state.likedItems));
    },

    
    removeFromlike: (state, action) => {
      console.log(action.payload);
      state.likedItems = state.likedItems.filter(
        (i) => i.id !== action.payload,
      );

      localStorage.setItem("likedItems", JSON.stringify(state.likedItems));
    },
    
    calculateTotal: (state) => {
      state.totalAmount = state.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
    },
  },
});

 export const {
   addtoCart,
   updateQuantity,
   removeFromCart,
   calculateTotal,
   addFavourite,
   dislikeCartproduct,
   removeFromlike,
    addCartFromFavorite,
 } = cartslice.actions;

export default cartslice.reducer;