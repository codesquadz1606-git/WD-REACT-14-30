import { configureStore } from "@reduxjs/toolkit";
import { CartSlicer } from "../slice/CartSlicer";

const cartStore=configureStore({
    reducer:{
        cart:CartSlicer.reducer
    }
})

export default cartStore;