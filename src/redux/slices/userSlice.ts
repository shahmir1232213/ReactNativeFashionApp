import { createSlice,PayloadAction } from '@reduxjs/toolkit';

type UserState = {
    email:string
}

const initialState:UserState = {
    email:''
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser:(state,action:PayloadAction<string>) => {
            state.email = action.payload
        },
        clearUser:(state) => {
            state.email = '';
        }
    }
})

export const {setUser,clearUser} = userSlice.actions;
export default userSlice.reducer;