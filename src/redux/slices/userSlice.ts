import { createSlice,PayloadAction } from '@reduxjs/toolkit';

type UserState = {
    userName:string
}

const initialState:UserState = {
    userName:''
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser:(state,action:PayLoadActions<string>) => {
            state.userName = action.payload
        },
        clearUser:(state) => {
            state.userName = '';
        }
    }
})

export const {setUser,clearUser} = userSlice.actions;
export default userSlice.reducer;