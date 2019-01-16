import {  ADD_GIF_FRAME, ADD_HORIZONTAL_FRAME, ADD_VERTICAL_FRAME, SELECT_FRAME } from '../reducers/types.js';

// export const addHorizontalFrame=(frame) =>{
// 	return (dispatch) => { //this comes from thunk technically we cant return a fn in action creators
// 		dispatch({type: ADD_HORIZONTAL_FRAME})
// 		fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/frames`, {
// 			method: 'GET',
// 			headers: {
// 				Authorization: `Bearer ${localStorage.getItem('jwt')}`
// 			},
// 			body: JSON.stringify({
// 				user: {
// 					username: username,
// 					password: password
// 				}
// 			})
// 		})
// 		.then(response => {
// 			if (response.ok) {
// 				return response.json();
// 			} else {
// 				throw response;
// 			}
// 		})
// 			.then(JSONResponse => {
// 				// console.log('%c INSIDE YE OLDE .THEN', 'color: navy')
// 				localStorage.setItem('jwt', JSONResponse.jwt)
// 				//localStorage is JS object to store info in user's machine so it will survive refreshing page and quitting chrome
// 				dispatch({ type: SET_CURRENT_USER, payload: JSONResponse.user })
// 				//payload info is coming from backend 
// 			})
// 			.catch(r => r.json().then(e => dispatch({ type: FAILED_LOGIN, payload: e.message })))
// 			//e.message is the error message bubbling up from Rails users_controller 
// 	}
// }

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
	debugger
	return (dispatch) => {
		dispatch({ type: SELECT_FRAME, payload: clickedFrame })
	}
	
}
