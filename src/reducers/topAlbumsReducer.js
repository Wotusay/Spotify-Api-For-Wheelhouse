import { SET_TopAlbums, ADD_TopAlbums } from '../consts/index';

// Reducer for top tracks

const topAlbumsReducer = (state = {}, action) => {
  const { topAlbums } = action;
  switch (action.type) {
    case SET_TopAlbums:
      return topAlbums;
    case ADD_TopAlbums:
      return {
        ...state,
        next: topAlbums.next,
        items: [...state.items, ...state.items],
      };
    default:
      return state;
  }
};

export default topAlbumsReducer;