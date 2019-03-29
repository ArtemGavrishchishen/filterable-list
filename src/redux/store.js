import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import usersReducer from './reducers/usersReducer';
import filteredReducer from './reducers/filteredReducer';
import selectedCityReducer from './reducers/selectedCityReducer';
import currentPageReducer from './reducers/currentPageReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  filtered: filteredReducer,
  selectedCity: selectedCityReducer,
  currentPage: currentPageReducer,
});
const logger = createLogger();

const middlewares = applyMiddleware(logger, thunk);

const enhancer = composeWithDevTools(middlewares);

const store = createStore(rootReducer, enhancer);

export default store;
