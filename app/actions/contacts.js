import {
	CONTACTS_DELETE,
	CONTACTS_UPDATE,
	CONTACTS_CREATE,
	CONTACTS_RELOAD,
} from './../constants/contacts';

export function deleteContact(id) {
	return (dispatch, getState) => {
		return dispatch({
			type: CONTACTS_DELETE,
			id
		});
	}


export function createContact(contact) {
	return (dispatch, getState) => {
		return dispatch({
			type: CONTACTS_DELETE,
			contact
		});
	}
}

export function updateContact(contact) {
	return (dispatch, getState) => {
		return dispatch({
			type: CONTACTS_UPDATE,
			contact
		});
	}
}

export function reloadContacts(contacts) {
	return (dispatch, getState) => {
		return dispatch({
			type: CONTACTS_RELOAD,
			contacts
		});
	}
}