import { SET_LastNumbers, ADD_LastNumbers } from '../consts/index';

const lastNumbersReducer = (state = {}, action) => {
  const { lastNumbers } = action;
  switch (action.type) {
    case SET_LastNumbers:
      return lastNumbers;

    case ADD_LastNumbers:
      return {
        ...state,
        next: lastNumbers.next,
        items: [...state.items, ...state.items],
      };
    default:
      return state;
  }
};

export default lastNumbersReducer;
