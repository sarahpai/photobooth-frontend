import { combineReducers } from 'redux'; // Pure JavaScript
import userReducer from './userReducer';
import photoReducer from './photoReducer';
import frameReducer from './frameReducer';

export default combineReducers({
    userReducer: userReducer,
    photoReducer: photoReducer,
    frameReducer: frameReducer
})