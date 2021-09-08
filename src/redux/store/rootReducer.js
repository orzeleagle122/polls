import {combineReducers} from "redux";
import {reducer as pollsReducer} from 'redux/slices/poll'
import {reducer as userReducer} from 'redux/slices/user'

export const rootReducer=combineReducers({
    polls:pollsReducer,
    user:userReducer
});
