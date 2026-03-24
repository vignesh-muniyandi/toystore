import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    cartItems:JSON.parse(localStorage.getItem("cartItems")) || [],
    totalAmount:0,
};

const cartslice =createSlice(
    {
    name : "cart",
    initialState,
    reducers:{
        addtoCart:(state , action) =>{
            const item = action.payload;
            const existingItem = state.cartItems.find(i => i.id ===item.id);

            if (existingItem){
                existingItem.quantity += 1;

            }else{
                state.cartItems.push({...item , quantity :1});
            }

            // save to local storage 

            localStorage.setItem("cartItems" ,JSON.stringify(state.cartItems));

        },

        updateQuantity:(state,action) =>{
            const {id ,change }=action .payload;
            const item = state.cartItems.find(i => i.id ===id);

            if(item ) {
                item.quantity += change;

                if(item.quantity <1){
                    item.quantity =1; //prevent going below
                }
            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))

        },

        removeFromCart:(state, action) =>{
            state.cartItems =state.cartItems.filter(i => i.id !== action.payload);
            localStorage.setItem("cartItems" ,JSON.stringify(state.cartItems))

        },
        calculateTotal :(state) =>{
            state.totalAmount=state.cartItems.reduce(
                (sum ,item) => sum + item.price * item.quantity,
                 0
            )

        },
    }
});

 export const {addtoCart ,updateQuantity , removeFromCart ,calculateTotal}=cartslice.actions;

export default cartslice.reducer;