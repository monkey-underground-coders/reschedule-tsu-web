import { createReducer } from "#/engine/util";
import ActionTypes from "../actions";
import { ScheduleInitialState } from "../types";

const initialState: ScheduleInitialState = {};

export default createReducer(
  {
    [ActionTypes.FETCH_SCHEDULE]: (state, action) => {
      return state;
    },
  },
  initialState,
);
