import {
	CONTACTS_DELETE,
	CONTACTS_UPDATE,
	CONTACTS_CREATE,
	CONTACTS_RELOAD,
	CONTACTS_FETCH
} from './../constants/contacts';

const initialState = {
	loading: false,
	contacts: [
	]
}

let handlers = {};

handlers[CONTACTS_DELETE] = (state, action) => {
	return {
		...state,
		contacts: state.contacts.filter((contact) => {
			return contact.id !== action.id;
		})
	};
};

handlers[CONTACTS_UPDATE] = (state, action) => {
	return {
		...state,
		contacts: state.contacts.map((contact) => {
			if (contact.id === action.contact.id) return action.contact;
			return contact;
		})
	};
};

handlers[CONTACTS_CREATE] = (state, action) => {
	return {
		...state,
		contacts: state.contacts.concat(action.contact)
	};
};

handlers[CONTACTS_RELOAD] = (state, action) => {
	return {
		...state,
		contacts: action.contacts
	};
};

handlers[CONTACTS_FETCH] = (state, action) => {
	return {
		...state,
		loading: (state.loading) ? false : true
	}
};

function contacts(state = initialState, action) {
	if (!handlers[action.type]) return state;
	return handlers[action.type](state, action);
}

export default contacts;