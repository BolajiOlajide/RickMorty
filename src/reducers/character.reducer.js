import { GET_CHARACTER_SUCCESS } from '../actions/types';

const characters = (state=[], action) => {
  switch (action.type) {
    case GET_CHARACTER_SUCCESS:
      return [
        ...state,
        ...action.payload
      ];

    default:
      return state;
  }
}

export default characters;
