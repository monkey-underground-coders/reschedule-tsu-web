import { combineReducers } from "redux";
import schedule from "./schedule";
import { connectRouter } from "connected-react-router";
import history from "#/engine/history";

export const rootReducer = combineReducers({ router: connectRouter(history), schedule });
export default rootReducer;
