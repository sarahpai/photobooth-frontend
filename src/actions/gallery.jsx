import { RECEIVED_ALL_PHOTOS } from '../reducers/types'


export const fetchAllPhotos = (id) => {
	// takes the token in localStorage and finds out who it belongs to
	debugger
	return (dispatch) => {
		fetch(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/users/${id}/photos`, {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
				responseType: 'stream',
			}
		})
		.then(response => response.json())
		  .then((JSONResponse) => { 
			  // console.log(JSON.parse(JSONResponse))
				debugger
				let payloadImage = JSONResponse.map((i) => {
					return i.photo
				})
			  dispatch({ type: RECEIVED_ALL_PHOTOS, payload: payloadImage})
		  })
	}
}