export const dateConst = {
  TIME_LIST: [],
  CURRENT_YYMMDD: {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate(),
  },
  MS_OF_DAY: 1000 * 24 * 3600,
  DAY_OF_WEEK: 7,
};

for (let i = 0; i < 24; i++) {
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

// export const GAP_FROM_SUNDAY = {
//   Sun: 0 * MS_OF_DAY,
//   Mon: 1 * MS_OF_DAY,
//   Tue: 2 * MS_OF_DAY,
//   Wed: 3 * MS_OF_DAY,
//   Thu: 4 * MS_OF_DAY,
//   Fri: 5 * MS_OF_DAY,
//   Sat: 6 * MS_OF_DAY,
// };
