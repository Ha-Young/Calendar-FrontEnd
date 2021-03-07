export const DATE = {
  TIME_LIST: new Array(25).fill(0).map((_, index) => index),
  MS_OF_DAY: 1000 * 24 * 3600,
  DAY_OF_WEEK: 7,
  DAYS: {
    SUN: 0,
    MON: 1,
    TUE: 2,
    WED: 3,
    THU: 4,
    FRI: 5,
    SAT: 6,
  },
};

export const DIRECTION = {
  NEXT: "NEXT",
  PREV: "PREV",
};

export const INPUT_TYPE = {
  TITLE: "title",
  DESCRIPTION: "description",
  DATE: "date",
  START_TIME: "startTime",
  END_TIME: "endTime",
};

export const FORM_TYPE = {
  ADD: "ADD",
  EDIT: "EDIT",
};
