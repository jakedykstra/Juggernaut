import { FETCH_SETTINGS } from "../../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SETTINGS:
      return action.payload || false;
    default:
      return state;
  }
}
