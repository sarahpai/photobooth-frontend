import { PHOTO_CAPTURED, PHOTO_ALL_CAPTURED} from './types'

const initialState = {
	photos: [],
	shouldStopCapture: false,
	MAX_PHOTOS_CAPTURED:4,
	number_of_remain:4
  };
  
const photoReducer = (state = initialState, action) => {
	console.log('%c photoReducer', 'color: purple', state.photos, action);
	switch (action.type) {
		case PHOTO_CAPTURED:
			return { ...state, photos: [...state.photos, action.photo], number_of_remain: state.number_of_remain - 1, shouldStopCapture: false }
		case PHOTO_ALL_CAPTURED:
			console.log("=====LAST PHOTO BEING TAKEN from PHOTOREDUCER=====");
			
			return { ...state, photos: state.photos.concat([action.payload]), number_of_remain: state.MAX_PHOTOS_CAPTURED, shouldStopCapture: true }
		default:
			return state
	}
}
export default photoReducer;