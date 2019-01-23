import { GET_ALL_PHOTO, PHOTO_ALL_CAPTURED, RECEIVED_ALL_PHOTOS } from './types'

const initialState = {
	photos: []
  };
  
export default function fetchAllPhotos(state = initialState, action) {
	// console.log('%c photoReducer', 'color: purple', state.photos, action);
	switch (action.type) {
		case PHOTO_ALL_CAPTURED:
			return {...state, photos: [...state.photos, action.payload]}
		case RECEIVED_ALL_PHOTOS:
			debugger
			console.log("=====LAST PHOTO BEING TAKEN from PHOTOREDUCER=====");
			return { ...state, photos: [ ...action.payload]}
		default:
			return state
	}
}
