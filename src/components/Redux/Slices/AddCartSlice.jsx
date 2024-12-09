import { createSlice } from "@reduxjs/toolkit";
import menuItems from "../../../Data/menuData";

const AddCartSlice=createSlice({
    initialState:{
        items:menuItems,
        data:menuItems,
        cartItems:[],
        itemCount:0,
        newPrice:'',
    },
    name:"cart",
    reducers:{
        FilterData(state,action){
            const filteredData=action.payload.menuItems.filter(item => item.title.toLowerCase().includes(action.payload.search.toLowerCase()))
            state.items=filteredData
        },
        ADD_TO_CART(state, action) {
            const Index = state.cartItems.findIndex(item => item.id === action.payload.id);
            const obj = { ...action.payload };
      
            if (Index !== -1) {
              state.cartItems[Index].quantity += action.payload.quantity;
              state.itemCount += action.payload.quantity;
            } else {
              state.cartItems.push(obj);
              state.itemCount += action.payload.quantity;
            }
          },      
        CHANGE_AMOUNT(state,action){
            const quantity= action.payload.quantity
            const price=action.payload.price
            const newData=quantity*parseInt(price)
            state.newPrice=newData
        },
        INCREMENT_VALUE(state, action) {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (itemIndex !== -1) {
              state.cartItems[itemIndex].quantity += 1;
              state.itemCount+=1
            }
          },
        DECREMENT_VALUE(state, action) {
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            console.log("the index is",itemIndex);
            if (itemIndex !== -1) {
              state.cartItems[itemIndex].quantity -= 1;
              state.itemCount-=1
            }
            if (state.cartItems[itemIndex].quantity === 0) {
                state.cartItems.splice(itemIndex, 1);
              }
          },
          ClearCart(state){
            state.cartItems=[]
            state.itemCount=0;
          },
        DeleteItem(state,action){
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
            state.itemCount-=1
        },
        CallThali(state,action){
            const filteredData=state.data.filter(item => item.title.toLowerCase().includes(action.payload.type.toLowerCase()))
            state.items=filteredData
        }
    }
})

export const {ADD_TO_CART,CHANGE_AMOUNT,INCREMENT_VALUE,DECREMENT_VALUE,ClearCart,DeleteItem,FilterData,CallThali}=AddCartSlice.actions;
export default AddCartSlice.reducer

