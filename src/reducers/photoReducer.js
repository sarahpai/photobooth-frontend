import { PHOTO_CAPTURED, RESET_PHOTOS} from './types'

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
		case RESET_PHOTOS:
			debugger
			return initialState
		default:
			return state
	}
}
export default photoReducer;