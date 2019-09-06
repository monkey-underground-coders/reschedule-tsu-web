import ActionTypes from "#/engine/actions";
import { getRequest } from "#/agent";
import { Dispatch } from "redux";
import apiRoutes from "#/mappings/routes_api";
import { Faculty } from "../types";

export const fetchFaculties = () => (dispatch: Dispatch, getState: void) => {
  dispatch({ type: ActionTypes.SCHEDULE_ACTION_TYPES.FETCH_FACULTIES_START });
  return getRequest(apiRoutes.faculties)
    .then((json: any) => {
      dispatch({
        type: ActionTypes.SCHEDULE_ACTION_TYPES.FETCH_FACULTIES_SUCCEED,
        payload: json.faculties,
      });
    })
    .catch((err: Error) => {
      dispatch({ type: ActionTypes.SCHEDULE_ACTION_TYPES.FETCH_FACULTIES_FAIL });
      throw err;
    });
};

export const getFacultyGroups = (faculty: Faculty) => (dispatch: Dispatch, getState: void) => {
  dispatch({ type: ActionTypes.SCHEDULE_ACTION_TYPES.FETCH_GROUPS_START });
  return getRequest(apiRoutes.facultyGroups(faculty))
    .then((json: any) => {
      dispatch({
        type: ActionTypes.SCHEDULE_ACTION_TYPES.FETCH_GROUPS_SUCCEED,
        payload: { groups: json.groups, faculty },
      });
    })
    .catch((err: Error) => {
      dispatch({ type: ActionTypes.SCHEDULE_ACTION_TYPES.FETCH_GROUPS_FAIL });
      throw err;
    });
};
