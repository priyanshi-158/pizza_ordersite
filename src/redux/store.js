import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import loginReducer from './loginSlice'
export default configureStore({
    reducer:{
        cart:cartReducer,
        login:loginReducer
    }
})