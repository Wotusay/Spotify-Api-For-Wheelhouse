import { SET_Profile, ADD_Profile } from '../consts/index';

// Reducer for top tracks

const profileReducer = (state = {}, action) => {
  const { profile } = action;
  switch (action.type) {
    case SET_Profile:
      return profile;
    case ADD_Profile:
      return {
        ...state,
        next: profile.next,
        items: [...state.items, ...state.items],
      };
    default:
      return state;
  }
};

export default profileReducer;