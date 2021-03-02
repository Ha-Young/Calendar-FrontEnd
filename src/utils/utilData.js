export const TIME_LIST = [];

for (let i = 0; i < 24; i++) {
  TIME_LIST.push(i);
}

export const CURRENT_YYMMDD = {
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  day: new Date().getDate(),
};

export const MS_OF_DAY = 1000 * 24 * 3600;

export const DAY_OF_WEEK = 7;

// export const GAP_FROM_SUNDAY = {
//   Sun: 0 * MS_OF_DAY,
//   Mon: 1 * MS_OF_DAY,
//   Tue: 2 * MS_OF_DAY,
//   Wed: 3 * MS_OF_DAY,
//   Thu: 4 * MS_OF_DAY,
//   Fri: 5 * MS_OF_DAY,
//   Sat: 6 * MS_OF_DAY,
// };
