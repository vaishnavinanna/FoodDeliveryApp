import { configureStore } from "@reduxjs/toolkit";
import  AddCartSlice  from "./components/Redux/Slices/AddCartSlice";

export const store=configureStore({
    reducer:{
        cart:AddCartSlice,
    }
})