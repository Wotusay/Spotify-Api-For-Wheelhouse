import { SET_TopTracks, ADD_TopTracks } from '../consts/index';

// Reducer for top tracks

const topTracksReducer = (state = {}, action) => {
  const { topTracks } = action;
  switch (action.type) {
    case SET_TopTracks:
      return topTracks;
    case ADD_TopTracks:
      return {
        ...state,
        next: topTracks.next,
        items: [...state.items, ...state.items],
      };
    default:
      return state;
  }
};

export default topTracksReducer;