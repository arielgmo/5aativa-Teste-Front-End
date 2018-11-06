import { 
  FETCH_CHARACTERS_SUCCESSFUL,
} from '../actions/charactersActions';

export default function charactersReducer(state = {}, action) {
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
