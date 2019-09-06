import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "#/engine/reducers";
import thunkMiddleware from "redux-thunk";
import { StoreState } from "./types";

const initialState: StoreState = {} as any;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  }
}

const store = (() => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));
  return createStore(rootReducer as any, initialState as any, enhancer);
})();

export default store;
