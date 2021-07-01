import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import historyReducer from '../reducers/history';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    history: historyReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;