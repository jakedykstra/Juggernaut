import { FETCH_USER } from "../../actions/types";

// state is null before user is authenticated
export default function(
  state = {
    email: "",
    name: "",
    picture: ""
  },
  action
) {
  // take in the action type and if FETCH_USER return user data as state
  switch (action.type) {
    case FETCH_USER:
      return action.payload;
    default:
      return state;
  }
}
