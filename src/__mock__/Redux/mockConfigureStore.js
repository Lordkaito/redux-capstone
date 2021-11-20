import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Logger from 'redux-logger';
import CountryReducer from './state/mockCountryState';

const reducer = combineReducers({
  CountryReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, Logger));

export default store;
