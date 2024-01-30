import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],
    quantity:localStorage.getItem("quantity")?JSON.parse(localStorage.getItem("quantity")):0,
    total:localStorage.getItem("total")?JSON.parse(localStorage.getItem("total")):0
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addProduct:(state, action)=>{
            state.products.push(action.payload)
            state.quantity+=1
            state.total+=action.payload.price *action.payload.quantity
            localStorage.setItem("cart",JSON.stringify(state.products));
            localStorage.setItem("quantity",JSON.stringify(state.quantity));
            localStorage.setItem("total",JSON.stringify(state.total))
        },
        reset:(state)=>{
            state = initialState;
        },
    }
})

export const {addProduct,reset}=cartSlice.actions;
export default cartSlice.reducer;