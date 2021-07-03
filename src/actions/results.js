import { SET_LastNumbers, ADD_LastNumbers } from '../consts/index.js';
import { get } from '../services/api.js';
 
const setlastNumbers = (lastNumbers) => ({
  type: SET_LastNumbers,
  lastNumbers,
});
 
const addlastNumbers = (lastNumbers) => ({
  type: ADD_LastNumbers,
  lastNumbers,
});

const initiateGetResult = () => {
  return async (dispatch) => {
    try {
      const API_URL = `https://api.spotify.com/v1/me/player/recently-played?limit=50`;
      const result = await get(API_URL);
      return dispatch(setlastNumbers(result));
    } catch (error) {
      console.log('error', error);
    }
  };
};

export { setlastNumbers, addlastNumbers, initiateGetResult };
