import {createSlice} from "@reduxjs/toolkit";

const initialState=[
    {
        name: 'Poll no 1',
        questions: [
            {
                type: 'singleAns',
                question: 'How many old are u?',
                anwser: '25'
            }
        ]
    }
]

const slice = createSlice({
    name: 'polls',
    initialState,
    reducers:{
        createPoll(state,action){

        }
    }
})

export const {reducer}=slice;

// ACTIONS

export const createPoll = (data) => async (dispatch)=>{
    console.log(data);
}