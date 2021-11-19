import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Logger from 'redux-logger';
import AllCountriesReducer from './state/ContinentState';
import CountryReducer from './state/CountryState';

const reducer = combineReducers({
  AllCountriesReducer, CountryReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, Logger));

export default store;
