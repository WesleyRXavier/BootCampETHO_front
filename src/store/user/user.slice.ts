import { createSlice } from "@reduxjs/toolkit";
import { userState } from "./user.types";
import reducers from './user.reducers'


const initialState:userState = {
    data:null
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers,
})


export const{reducer:userReducer, actions:UserAction}  = userSlice