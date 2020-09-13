import { SET_SCREAMS } from "../types";
const initialState = {
  screams: [],
  scream: {},
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SCREAMS:
      return { ...state, screams: action.payload, loading: false };
    default:
      return state;
  }
}
