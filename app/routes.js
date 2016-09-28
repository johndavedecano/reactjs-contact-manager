import React from 'react';
import { Route, NotFoundRoute, Redirect, DefaultRoute } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import ContactsCreate from './containers/ContactsCreate';
import ContactsUpdate from './containers/ContactsUpdate';

export default (
    <Route component={App}>
		<Route name="main" component={Home} path="/" />
		<Route name="contacts.create" component={ContactsCreate} path="/contacts/create" />
		<Route name="contacts.update" component={ContactsUpdate} path="/contacts/update/:id" />
        <Redirect from="/index.html" to="/"/>
        <Redirect from="/*/" to="/*"/>
    </Route>
);