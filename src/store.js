import { createStore, combineReducers,applyMiddleware } from 'redux';
import {getQuote} from './reducers/getQuote';
import thunk from 'redux-thunk';
	const reduxStore = createStore(
		combineReducers({
			getQuote
		}),applyMiddleware(thunk));

export {
	reduxStore
}

