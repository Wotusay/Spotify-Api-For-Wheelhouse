import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import lastNumbersReducer from '../reducers/lastNumbers';
import profileReducer from '../reducers/profileReducer';
import topAlbumsReducer from '../reducers/topAlbumsReducer';
import topTracksReducer from '../reducers/topTracksReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Creating the redux store
const store = createStore(
  // Reducers
  combineReducers({
    lastNumbers: lastNumbersReducer,
    topTracks: topTracksReducer,
    topAlbums: topAlbumsReducer,
    profile: profileReducer
  }),
  // Composer
  composeEnhancers(applyMiddleware(thunk))
);

export default store;