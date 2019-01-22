import { GET_ALL_PHOTO, RECEIVED_ALL_PHOTOS } from '../reducers/types'


export const fetchAllPhotos = (id) => {
	// takes the token in localStorage and finds out who it belongs to
	debugger
	return (dispatch) => {
		dispatch({type: GET_ALL_PHOTO})
		fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/users/${id}/photos`, {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
				'Content-Type':  'application/octet-stream'
			
			}
		})
		.then(response => response.text())
		  .then((JSONResponse) => { 
			  console.log(JSON.parse(JSONResponse))
			  debugger
			//   dispatch({ type: RECEIVED_ALL_PHOTOS, payload: JSONResponse[5].photo})
		  })
	}
}