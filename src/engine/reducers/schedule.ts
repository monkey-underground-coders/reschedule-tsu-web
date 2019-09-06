import { createReducer } from "#/engine/util";
import ActionTypes from "../actions";
import { ScheduleInitialState } from "../types";

const initialState: ScheduleInitialState = {
  currentFaculty: undefined,

  facultiesLoading: false,
  faculties: [],

  facultiesData: {},
  hasErrors: false,
};

export default createReducer(
  {
    ///////////////////////////
    //////// Faculties
    //////////////////////////
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

    ///////////////////////////
    ///////// Groups
    ///////////////////////////
    [ActionTypes.SCHEDULE_ACTION_TYPES.FETCH_GROUPS_START]: (state, action: any) => ({
      ...state,
      groupsLoading: true,
    }),

    [ActionTypes.SCHEDULE_ACTION_TYPES.FETCH_GROUPS_SUCCEED]: (state, action: any) => ({
      ...state,
      facultiesData: {
        ...state.facultiesData,
        [action.payload.faculty]: {
          ...state.facultiesData[action.payload.faculty],
          groups: action.payload.groups,
        },
      },
      groupsLoading: false,
    }),

    [ActionTypes.SCHEDULE_ACTION_TYPES.FETCH_GROUPS_FAIL]: (state, action: any) => ({
      ...state,
      groupsLoading: false,
      hasErrors: true,
    }),
  },
  initialState,
);
