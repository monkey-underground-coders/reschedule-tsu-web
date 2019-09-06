import { createReducer } from "#/engine/util";
import ActionTypes from "../actions";
import { ScheduleInitialState } from "../types";

const initialState: ScheduleInitialState = {};

export default createReducer(
  {
    [ActionTypes.SCHEDULE_ACTION_TYPES.FETCH_SCHEDULE_START]: (state, action) => {
      return state;
    },
  },
  initialState,
);
