import { CHANGE_WEIGHT } from "../../actions/types";

export default function(
  state = {
    weightType: "lb",
    weightIncrement: 1
  },
  action
) {
  switch (action.type) {
    case CHANGE_WEIGHT:
      return action.payload || false;
    default:
      return state;
  }
}

// weight increment will convert to 2.2 for kg
