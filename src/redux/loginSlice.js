import { createSlice } from "@reduxjs/toolkit";

const initialState={
    loggedin:false,
    token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
}

const loginSlice=createSlice({
    name:"login",
    initialState,
    reducers:{
        loginAcc:(state, action)=>{
            state.loggedin=true;
            state.token=action.payload.token
        },
        logout:(state)=>{
        localStorage.removeItem("token")
        localStorage.removeItem("user");
        localStorage.removeItem("cart");
        localStorage.removeItem("quantity");
        localStorage.removeItem("total");
        state.token=null;
        state.loggedin=false
        },
        reset:(state)=>{
            state = initialState;
        },
    }
})

export const {loginAcc,reset,logout}=loginSlice.actions;
export default loginSlice.reducer;