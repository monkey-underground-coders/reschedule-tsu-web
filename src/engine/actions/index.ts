type ActionType = string;

const prefixes = {
  schedule: "%%SCHEDULE",
  session: "%%SESSION",
};

export const createActionTypeGroup = (actions: string[], prefix: keyof typeof prefixes) =>
  actions.reduce(
    (acc: Record<ActionType, string>, action: ActionType) => ({
      ...acc,
      [action]: `${prefixes[prefix]}/${action}`,
    }),
    {},
  );

export const createStatefulAction = (action: string) => [
  `${action}_START`,
  `${action}_SUCCEED`,
  `${action}_FAIL`,
];

const SCHEDULE_ACTION_TYPES = createActionTypeGroup(
  [
    ...createStatefulAction("FETCH_FACULTIES"),
    ...createStatefulAction("FETCH_GROUPS"),
    ...createStatefulAction("FETCH_SCHEDULE"),
  ],
  "schedule",
);

export default {
  SCHEDULE_ACTION_TYPES,
};
