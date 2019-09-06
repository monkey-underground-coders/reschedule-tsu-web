import { createReducer } from "#/engine/util";
import ActionTypes from "../actions";
import { ScheduleInitialState } from "../types";

const initialState: ScheduleInitialState = {
  facultiesLoading: false,
  faculties: [],
  hasErrors: false,
};

export default createReducer(
  {
    [ActionTypes.SCHEDULE_ACTION_TYPES.FETCH_FACULTIES_START]: (state, action: any) => ({
      ...state,
      facultiesLoading: true,
    }),

    [ActionTypes.SCHEDULE_ACTION_TYPES.FETCH_FACULTIES_SUCCEED]: (state, action: any) => ({
      ...state,
      faculties: action.payload,
      facultiesLoading: false,
    }),

    [ActionTypes.SCHEDULE_ACTION_TYPES.FETCH_FACULTIES_FAIL]: (state, action: any) => ({
      ...state,
      hasErrors: true,
      facultiesLoading: false,
    }),
  },
  initialState,
);
