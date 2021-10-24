import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import thunk from 'redux-thunk';

import auth from '../reducers/auth';
import calendar from '../reducers/calendar';
import modal from '../reducers/modal';

const reducer = combineReducers({
  auth,
  calendar,
  modal,
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
