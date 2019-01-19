import {  ADD_GIF_FRAME, ADD_HORIZONTAL_FRAME, ADD_VERTICAL_FRAME, SELECT_FRAME } from '../reducers/types.js';

export const fetchHorizontalFrame = () => {
	// takes the token in localStorage and finds out who it belongs to
	return (dispatch) => {
	  fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/frames`, {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${localStorage.getItem('jwt')}`
			}
		})
		.then(response => response.json())
		  .then((JSONResponse) => { 
			console.log(JSONResponse)
			  dispatch({ type: ADD_HORIZONTAL_FRAME, payload: JSONResponse[0].frame_horizontal })
		  })
	}
}

export const fetchVerticalFrame = () => {
	return (dispatch) => {
		fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/frames`, {
			  method: 'GET',
			  headers: {
				  'Authorization': `Bearer ${localStorage.getItem('jwt')}`
			  }
		  })
		  .then(response => response.json())
			.then((JSONResponse) => { 
			  console.log(JSONResponse)
				dispatch({ type: ADD_VERTICAL_FRAME, payload: JSONResponse[0].frame_vertical })
			})
	  }
}

export const fetchGifFrame = () => {
	return (dispatch) => {
		fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/frames`, {
			  method: 'GET',
			  headers: {
				  'Authorization': `Bearer ${localStorage.getItem('jwt')}`
			  }
		  })
		  .then(response => response.json())
			.then((JSONResponse) => { 
			  console.log(JSONResponse)
				dispatch({ type: ADD_GIF_FRAME, payload: JSONResponse[0].frame_gif })
			})
	  }
}

export const selectFrame = (clickedFrame) => {
	return (dispatch) => {
		dispatch({ type: SELECT_FRAME, payload: clickedFrame })
	}
	
}
