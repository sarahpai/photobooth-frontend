import UUID from 'uuid';
import { ADD_USER } from '../reducers/types';

export function addUserAction(username, password) {
	return {
		type: ADD_USER,
		payload:{id: UUID(), username, password}
	}
}