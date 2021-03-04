export const dateConst = {
  TIME_LIST: [],
  MS_OF_DAY: 1000 * 24 * 3600,
  DAY_OF_WEEK: 7,
};

for (let i = 0; i < 25; i++) {
  const time = ("0" + i).slice(-2);
  dateConst.TIME_LIST.push(time);
}

export const directionConst = {
  NEXT: "NEXT",
  PREV: "PREV",
};

export const inputConst = {
  TITLE: "title",
  DESCRIPTION: "description",
  DATE: "date",
  START_TIME: "startTime",
  END_TIME: "endTime",
};

export const typeConst = {
  ADD: "ADD",
  EDIT: "EDIT",
};
