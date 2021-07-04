import { GET_CurrentlyPlaying } from '../consts/index';

// Reducer for top tracks

const currentlyPlayingReducer = (state = {}, action) => {
  const { currentlyPlaying } = action;
  switch (action.type) {
    case GET_CurrentlyPlaying:
      return currentlyPlaying;
    default:
      return state;
  }
};

export default currentlyPlayingReducer;