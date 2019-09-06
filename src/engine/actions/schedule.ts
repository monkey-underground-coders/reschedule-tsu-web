import ActionTypes from "#/engine/actions";
import { getRequest } from "#/agent";
import { Dispatch } from "redux";
import apiRoutes from "#/mappings/routes_api";

export const fetchFaculties = () => (dispatch: Dispatch, getState: void) => {
  dispatch({ type: ActionTypes.SCHEDULE_ACTION_TYPES.FETCH_FACULTIES_START });
  return getRequest(apiRoutes.faculties)
    .then((json: any) => {
      const { groups } = json;
      console.log(groups);
    })
    .catch((err: Error) => {
      throw err;
    });
};
