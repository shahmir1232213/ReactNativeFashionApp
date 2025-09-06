import {createSlice,PayloadAction } from '@reduxjs/toolkit';
import { clear } from 'react-native/types_generated/Libraries/LogBox/Data/LogBoxData';

export interface CartStateItem{
    category:string,
    name:string,
    size:string,
    quantity:number,
    color:string,
    address?:string,
    image?:string,
    price:number,
    priceDisplay?:number,
}

interface CartSliceState {
    items: CartStateItem[];
    total: number;
    deliveryCharges?: number;
}

const initialState: CartSliceState = {
    items: [],
    total: 0,
    deliveryCharges: 0,
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        setDeliveryCharges(state,action:PayloadAction<number>){
            state.deliveryCharges = action.payload
        },
        setCart:(state,action:PayloadActions<CartState>)=>{
          state.items.push(action.payload);
          state.total += action.payload.price;
        },
        updateCart:(state,action:PayloadAction<CartState>)=>{
          // console.log('action payload: ',action.payload.functionality)
         if(action.payload.functionality === 'decrease'){
            if(state.items[action.payload.index].quantity > 1) {
                state.items[action.payload.index].quantity -= 1
                state.items[action.payload.index].priceDisplay -= state.items[action.payload.index].price
                state.total -= state.items[action.payload.index].price
            }
            else{
               state.total -= state.items[action.payload.index].price
                 state.items.splice(action.payload.index,1)
            }

        }
         else if(action.payload.functionality === 'increase') {
           state.items[action.payload.index].quantity += 1;
           state.items[action.payload.index].priceDisplay += state.items[action.payload.index].price
           state.total += state.items[action.payload.index].price
           console.log('Total Bill: ',state.total)
         }

         else return
        },
        clearCart:(state)=>{
            state.items = []
            state.total = 0
            state.deliveryCharges = 0
        }
    },
      
    
})

export const {setCart,updateCart,setDeliveryCharges,clearCart} = cartSlice.actions
export default cartSlice.reducer