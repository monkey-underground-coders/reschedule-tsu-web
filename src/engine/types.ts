export type Faculty = string;

export interface ScheduleInitialState {
  facultiesLoading: boolean;
  faculties: Faculty[];
  hasErrors: boolean;
}

export interface StoreState {
  schedule: ScheduleInitialState;
}
