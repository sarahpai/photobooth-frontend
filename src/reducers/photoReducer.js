import { PHOTO_CAPTURED, PHOTO_ALL_CAPTURED, RESET_PHOTOS} from './types'

const initialState = {
	photos: [],
	frames: [],
	number_of_remain:4
  };
  
const photoReducer = (state = initialState, action) => {
	console.log('%c photoReducer', 'color: purple', state.photos, action);
	switch (action.type) {
		case PHOTO_CAPTURED:
			return { ...state, photos: [...state.photos, action.photo], frames: state.frames.concat([action.frames]), number_of_remain: state.number_of_remain - 1 }
		case PHOTO_ALL_CAPTURED:
			console.log("=====LAST PHOTO BEING TAKEN from PHOTOREDUCER=====");
			return { ...state, photos: state.photos.concat([action.payload]), frames: state.frames.concat([action.frames]), number_of_remain: 0}
		case RESET_PHOTOS:
			return {...initialState}
		default:
			return state
	}
}
export default photoReducer;