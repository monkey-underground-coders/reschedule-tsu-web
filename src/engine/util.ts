import { Action } from "redux";

export type ReducerGenerics<T, A> = Record<string, (state: T, action: A) => T>;

export const createReducer = <T, A extends Action>(
  components: ReducerGenerics<T, A>,
  initialState: T,
) => (state: T = initialState, action: A) =>
  components.hasOwnProperty(action.type) ? components[action.type](state, action) : state;
