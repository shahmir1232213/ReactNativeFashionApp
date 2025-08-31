import {createSlice,PayloadAction } from '@reduxjs/toolkit';

export interface CartState {
    category:string,
    name:string,
    size:string,
    quantity:number,
    color:string,
    address?:string
}

const initialState:CartState[] = []


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        setCart:(state,action:PayloadActions<string>)=>{
          state.push(action.payload);
        },
        // clearCart:(state,action:PayloadActions<string>)=>{
        //     state.category = ''
        //     state.name = ''
        //     state.size = ''
        //     state.quantity = 0
        //     state.color = ''
        //     state.address = ''
        // }
    }
})

export const {setCart} = cartSlice.actions
export default cartSlice.reducer