import {createSlice} from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    userPolls: [],
};

const slice = createSlice({
    name: 'polls',
    initialState,
    reducers: {
        createPoll(state, action) {
            console.log('here create poll');
        },
        getUserPolls(state, action) {
            const polls = action.payload;
            state.userPolls = polls;
        }


    }
})

export const {reducer} = slice;

// ACTIONS

export const createPoll = (data) => async (dispatch) => {
    console.log(data);
}

export const getUserPolls = () => async (dispatch) => {
    const {data: {polls}} = await axios.get('/getUserPolls');

    dispatch(slice.actions.getUserPolls(polls))
}