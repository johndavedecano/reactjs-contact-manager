import {
	CONTACTS_DELETE,
	CONTACTS_UPDATE,
	CONTACTS_CREATE,
	CONTACTS_RELOAD,
	CONTACTS_FETCH
} from './../constants/contacts';
import { load, create, update, destroy } from './../backend/contactsAPI';

export function fetchContact(id) {
	return (dispatch, getState) => {
		return dispatch({
			type: CONTACTS_FETCH,
			id
		});
	}
}
export function deleteContact(id) {
	return (dispatch, getState) => {
		return destroy(id).then(() => {
			return dispatch({ type: CONTACTS_DELETE, id});
		});
	}
}

export function createContact(contact) {
	return (dispatch, getState) => {
		return create(contact).then(() => {
			return dispatch({
				type: CONTACTS_CREATE,
				contact
			});
		});
	}
}

export function updateContact(contact) {
	return (dispatch, getState) => {
		return update(contact.id, contact).then(() => {
			return dispatch({
				type: CONTACTS_UPDATE,
				contact
			});
		});
	}
}

export function reloadContacts() {
	return (dispatch, getState) => {
		load().then((response) => {
			return dispatch({
				type: CONTACTS_RELOAD,
				contacts: response.body
			});
		});
	}
}