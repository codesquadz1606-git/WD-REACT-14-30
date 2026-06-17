import { createSlice } from "@reduxjs/toolkit";

const initalState =10
export const CartSlicer = createSlice({
    name: "cart",
    initalState,
    reducers: {
        add(state, action) {
            state.push(action.payload)
        }
    }
})

export const { add } = CartSlicer.actions;
export default CartSlicer.reducer;