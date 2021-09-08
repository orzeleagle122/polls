import {createSlice} from "@reduxjs/toolkit";

const initialState={}

const slice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        login(state,action){

        }
    }
})

export const {reducer}=slice;

// ACTIONS

export const login = (data) => async (dispatch)=>{
    console.log(data);
}