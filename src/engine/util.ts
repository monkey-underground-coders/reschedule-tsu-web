import { Action } from "redux";

export type ReducerGenerics<T, A> = (state: T, action: A) => T;
export type CreateReducerComponents<T, A> = Record<string, ReducerGenerics<T, A>>;

export const createReducer = <T, A extends Action>(
  components: CreateReducerComponents<T, A>,
  initialState: T,
) => (state: T = initialState, action: A) =>
  components.hasOwnProperty(action.type) ? components[action.type](state, action) : state;
