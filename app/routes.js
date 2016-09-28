import React from 'react';
import { Route, NotFoundRoute, Redirect, DefaultRoute } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';

export default (
    <Route component={App}>
		<Route name="main" component={Home} path="/" />
        <Redirect from="/index.html" to="/"/>
        <Redirect from="/*/" to="/*"/>
    </Route>
);