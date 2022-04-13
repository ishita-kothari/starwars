import { TOTAL_PLANET_RESULT } from "../actions/actionTypes";

const DEFAULT_STATE = {};

export default (state = DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOTAL_PLANET_RESULT:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
