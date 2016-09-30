import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'
import DevTools from './containers/DevTools';
import { persistState } from 'redux-devtools';

const loggerMiddleware = createLogger()

const enhancer = compose(
	applyMiddleware(thunkMiddleware),
	DevTools.instrument(),
	persistState(
		window.location.href.match(
		  /[?&]debug_session=([^&#]+)\b/
		)
	)
);
export default function configureStore(preloadedState) {
	return createStore(
		rootReducer,
		preloadedState,
		enhancer
	);
}
