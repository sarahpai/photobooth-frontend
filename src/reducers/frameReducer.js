import { ADD_VERTICAL_FRAME, ADD_HORIZONTAL_FRAME, ADD_GIF_FRAME, SELECT_FRAME} from './types'

const initialState = {
	vertical_frame: "",
	horizontal_frame: "",
	gif_frame: "",
	selected_frame: ""
};
  
const frameReducer = (state = initialState, action) => {
	console.log('%c frameReducer', 'color: purple', state, action);
	switch (action.type) {
		case ADD_VERTICAL_FRAME:
			return { ...state, vertical_frame: action.payload }
		case ADD_HORIZONTAL_FRAME:
			console.log("=====HORIZONTAL FRAME has been selected from REDUCER ======");
			return { ...state, horizontal_frame: action.payload }
		case ADD_GIF_FRAME:
			return { ...state, gif_frame: action.payload }
		case SELECT_FRAME:
			debugger
			return {
				...state, selected_frame: action.payload
			}
		default:
			return state
	}
}
export default frameReducer;