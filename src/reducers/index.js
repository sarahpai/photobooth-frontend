import { combineReducers } from 'redux'; // Pure JavaScript
import userReducer from './userReducer';
import photoReducer from './photoReducer';

export default combineReducers({
    userReducer: userReducer,
    photoReducer: photoReducer
})