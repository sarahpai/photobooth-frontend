import {  SELECT_FRAME } from '../reducers/types.js';


export const selectFrame = (clickedFrame) => {
	return (dispatch) => {
		dispatch({ type: SELECT_FRAME, payload: clickedFrame })
	}
	
}
