import { createStore, applyMiddleware } from 'redux';
import combineReducer from '../reducers/combineReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(combineReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;