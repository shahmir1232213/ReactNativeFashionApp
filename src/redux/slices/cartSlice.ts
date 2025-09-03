import {createSlice,PayloadAction } from '@reduxjs/toolkit';

export interface CartState {
    category:string,
    name:string,
    size:string,
    quantity:number,
    color:string,
    address?:string,
    image?:string,
    price:number,
    priceDisplay?:number
}

const initialState:CartState[] = []


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        setCart:(state,action:PayloadActions<CartState>)=>{
          state.push(action.payload);
        },
        updateCart:(state,action:PayloadAction<CartState>)=>{
          // console.log('action payload: ',action.payload.functionality)
         if(action.payload.functionality === 'decrease'){
            if(state[action.payload.index].quantity > 1) {
                state[action.payload.index].quantity -= 1
                 state[action.payload.index].priceDisplay -= state[action.payload.index].price
            }
            else{
                 state.splice(state[action.payload.index],1)
            }

        }
         else if(action.payload.functionality === 'increase') {
           state[action.payload.index].quantity += 1;
           state[action.payload.index].priceDisplay += state[action.payload.index].price
         }

         else return
        },
    },
        // clearCart:(state,action:PayloadActions<string>)=>{
        //     state.category = ''
        //     state.name = ''
        //     state.size = ''
        //     state.quantity = 0
        //     state.color = ''
        //     state.address = ''
        // }
    
})

export const {setCart,updateCart} = cartSlice.actions
export default cartSlice.reducer