import { SELECT_FRAME} from './types'

const initialState = {
	selected_frame: ""
};
  
const frameReducer = (state = initialState, action) => {
	console.log('%c frameReducer', 'color: purple', state, action);
	switch (action.type) {
		case SELECT_FRAME:
			return {
				...state, selected_frame: action.payload
			}
		default:
			return state
	}
}
export default frameReducer;