const createEnum = <T extends { [index: string]: U }, U extends string>(x: T) => x;

const prefixes = {
  schedule: "%%SCHEDULE",
  session: "%%SESSION",
};

const createScheduleAction = (action: string) => `${prefixes.schedule}/${action}`;
const createSessionAction = (action: string) => `${prefixes.session}/${action}`;

export default createEnum({
  FETCH_SCHEDULE: createScheduleAction("FETCH"),
});
