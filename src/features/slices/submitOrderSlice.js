import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    deliveryDay:null,
    deliveryTime:null,
    deliveryPrice:null,
    month:null
}

const submitOrderReducer = createSlice({
    name:'submitOrderSlice',
    initialState,
    reducers:{
        setDeliveryDay:(state,{payload})=>{
            state.deliveryDay = payload
        },
        setDeliveryTime:(state,{payload})=>{
            state.deliveryTime = payload
        },
        setDeliveryPrice:(state,{payload})=>{
            state.deliveryPrice = payload
        },
        setMonth:(state,{payload})=>{
            state.month = payload;
        }
    }
})

export default submitOrderReducer.reducer;
export const {setDeliveryDay,setDeliveryTime,setDeliveryPrice,setMonth} = submitOrderReducer.actions