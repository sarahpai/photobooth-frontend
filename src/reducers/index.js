import { combineReducers } from 'redux'; // Pure JavaScript
import userReducer from './userReducer';
import photoReducer from './photoReducer';
import frameReducer from './frameReducer';
import galleryReducer from './galleryReducer';


export default combineReducers({
    userReducer: userReducer,
    photoReducer: photoReducer,
    frameReducer: frameReducer,
    galleryReducer: galleryReducer
})