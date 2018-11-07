import {
  FETCH_CHARACTERS_SUCCESSFUL,
} from '../actions/charactersActions';

const INITIAL_STATE = {
  total: 0,
  characters: [],
};

export default function charactersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_CHARACTERS_SUCCESSFUL:
      return {
        total: action.payload.total,
        characters: [...action.payload.results],
      };
    default:
      return state;
  }
}
