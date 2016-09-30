import request from 'superagent';

const baseURL = 'http://localhost:3000/contacts/';

export function load() {
	return request.get(baseURL);
}

export function create(contact) {
	return request.post(baseURL).send(contact);
}

export function update(id, contact) {
	return request.put(baseURL + id).send(contact);
}

export function destroy(id) {
	return request.del(baseURL + id);
}