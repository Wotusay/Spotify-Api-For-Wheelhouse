import { ADD_HISTORY, SET_HISTORY } from '../consts/index.js';
import { get } from '../services/api.js';

const setHistory = (history) => ({
  type: SET_HISTORY,
  history,
});

const addHistory = (history) => ({
  type: ADD_HISTORY,
  history,
});

const initiateGetResult = () => {
  return async (dispatch) => {
    try {
      const API_URL = `https://api.spotify.com/v1/me/player/recently-played`;
      const result = await get(API_URL);
      console.log(result);
      return dispatch(setHistory(result));
    } catch (error) {
      console.log('error', error);
    }
  };
};

export { setHistory, addHistory, initiateGetResult };
