import { SET_CURRENT_USER, AUTHENTICATING_USER, AUTHENTICATED_USER, FAILED_LOGIN, LOGOUT_USER } from "./types";

const initialState = {
	username: null,
	loggedIn: false,
	authenticatingUser: false,
	failedLogin: false,
	error: null
}

const userReducer = (state = initialState, action) => {
	console.log('%c userReducer', 'color: blue', state, action);
	switch (action.type) {
		case SET_CURRENT_USER:
			return { ...state, user: action.payload, loggedIn: true, authenticatingUser:false }
		case AUTHENTICATING_USER: //tells the app we're fetching
			return { ...state, authenticatingUser: true }
		case AUTHENTICATED_USER:
			return { ...state, authenticatingUser: false }
		case "SIGNED_UP_USER":
			return {...state, authenticatingUser: true}
		case FAILED_LOGIN: //for error handling
			return {
				...state, failedLogin: true,
				error: action.payload,
				authenticatingUser: false
			}
		case LOGOUT_USER:
			return { ...state, initialState }
		default:
			return state
	}
}
export default userReducer;

