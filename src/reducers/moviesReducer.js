import {
  MOVIE_CHARACTERS,
  MOVIE_PLANETS,
  TOTAL_MOVIES_RESULT,
} from "../actions/actionTypes";

const DEFAULT_STATE = {};

export default (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOTAL_MOVIES_RESULT:
      return {
        ...state,
        movies: { ...payload },
      };
    case MOVIE_CHARACTERS:
      return {
        ...state,
        characters: payload,
      };
    case MOVIE_PLANETS:
      return {
        ...state,
        planets: payload,
      };
    default:
      return state;
  }
};
