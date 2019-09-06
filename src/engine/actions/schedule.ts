import ActionTypes from "#/engine/actions";
import { getRequest } from "#/agent";
import { Dispatch } from "redux";
import apiRoutes from "#/mappings/routes_api";

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
