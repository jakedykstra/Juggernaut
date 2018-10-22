import { FETCH_USER_LIFT_DATA, FETCH_WORKOUT_DATA } from "../../actions/types";

export default function(
  state = {
    bp: 225,
    mp: 135,
    dl: 315,
    sqt: 275,
    historicalMaxes: [],
    historicalWorkouts: ["bench", 225, 20181015, "squat", 265, 20181015]
    // need to have user max, and date, need max to automatically change based on realization phase
  },
  action
) {
  switch (action.type) {
    case FETCH_USER_LIFT_DATA:
      return (
        {
          bp: action.payload.bpMax,
          mp: action.payload.mpMax,
          dl: action.payload.dlMax,
          sqt: action.payload.sqtMax,
          historicalMaxes: action.payload.historicalMaxes,
          historicalWorkouts: action.payload.historicalWorkouts
        } || state
      );
    case FETCH_WORKOUT_DATA:
      return { historicalWorkouts: action.payload, ...state } || state;
    default:
      return state;
  }
}
