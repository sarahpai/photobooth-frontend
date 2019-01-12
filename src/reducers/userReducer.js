import { SET_CURRENT_USER, AUTHENTICATING_USER, AUTHENTICATED_USER, FAILED_LOGIN, RESET } from "./types";

const initialState = {
	username: "",
	loggedIn: false,
	authenticatingUser: false,
	failedLogin: false,
	error: null
}

const userReducer = (state = initialState, action) => {
	console.log('%c userReducer', 'color: blue', state, action);
	switch (action.type) {
		case SET_CURRENT_USER:
			return { ...state, username: action.payload, loggedIn: true, authenticatingUser:false }
		case AUTHENTICATING_USER: //tells the app we're fetching
			return { ...state, authenticatingUser: true }
		case AUTHENTICATED_USER:
			return { ...state, authenticatingUser: false }
		case FAILED_LOGIN: //for error handling
			return {
				...state, failedLogin: true,
				error: action.payload,
				authenticatingUser: false
			}
		case RESET:
			return initialState
		default:
			return state
	}
}
export default userReducer;

