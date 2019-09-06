import ActionTypes from "#/engine/actions";
import { Dispatch } from "redux";

export const fetchSchedule = (faculty: number) => (dispatch: Dispatch, getState: void) => {
  dispatch({ type: ActionTypes.FETCH_SCHEDULE });
};
