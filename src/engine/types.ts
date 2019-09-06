export type Faculty = string;

export interface ScheduleInitialState {
  currentFaculty: Faculty | undefined;

  facultiesLoading: boolean;
  faculties: Faculty[];

  facultiesData: Record<string, any>;

  hasErrors: boolean;
}

export interface StoreState {
  schedule: ScheduleInitialState;
}
