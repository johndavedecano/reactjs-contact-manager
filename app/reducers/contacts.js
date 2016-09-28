import {
	CONTACTS_DELETE,
	CONTACTS_UPDATE,
	CONTACTS_CREATE,
	CONTACTS_RELOAD,
} from './../constants/contacts';

const initialState = {
	loading: false,
	contacts: [
		{
		  id: 1,
		  name : 'Terrence S. Hatfield',
		  tel: '651-603-1723',
		  avatar: "/img/faces/1.jpg",
		  email: 'TerrenceSHatfield@rhyta.com'
		},
		{
		  id: 2,
		  name : 'Chris M. Manning',
		  tel: '513-307-5859',
		  avatar: "/img/faces/2.jpg",
		  email: 'ChrisMManning@dayrep.com'
		},
		{
		  id: 3,
		  name : 'Ricky M. Digiacomo',
		  tel: '918-774-0199',
		  avatar: "/img/faces/3.jpg",
		  email: 'RickyMDigiacomo@teleworm.us'
		},
		{
		  id: 4,
		  name : 'Michael K. Bayne',
		  tel: '702-989-5145',
		  avatar: "/img/faces/4.jpg",
		  email: 'MichaelKBayne@rhyta.com'
		},
		{
		  id: 5,
		  name : 'John I. Wilson',
		  tel: '318-292-6700',
		  avatar: "/img/faces/5.jpg",
		  email: 'JohnIWilson@dayrep.com'
		},
		{
		  id: 6,
		  name : 'Rodolfo P. Robinett',
		  tel: '803-557-9815',
		  avatar: "/img/faces/6.jpg",
		  email: 'RodolfoPRobinett@jourrapide.com'
		}
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
			if (contact.id === action.id) {
				return Object.assign({}, contact, action.contact);
			}
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
		contacts: actions.contacts
	};
};

function contacts(state = initialState, action) {
	if (!handlers[action.type]) return state;
	return handlers[action.type](state, action);
}

export default contacts;