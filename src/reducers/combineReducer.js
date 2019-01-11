import { SELECT_FRAME } from "./types";

const initialState = {
	frame: ""
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case SELECT_FRAME:
			return { ...state, frame: [...state.frame, action.payload] };
		default:
			return state
	}
}