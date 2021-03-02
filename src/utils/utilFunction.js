import moment from "moment";
import { dateConst } from "constants/constants";

export const getWeek = (ref = 0) => {
  const thisWeek = [];

  for (let i = ref; i < ref + dateConst.DAY_OF_WEEK; i++) {
    thisWeek.push(moment().day(i).format("MM DD dddd").split(" "));
  }

  return thisWeek;
};

export const getWeekOfMonth = (count = 0) => {
  const ref = moment().utc(true).day(count);
  const monthAndWeek = {};
  const weekOfMonth = ref.week() - moment(ref).startOf("month").week();
  monthAndWeek.month = ref.format("MM");
  monthAndWeek.week = weekOfMonth;

  return monthAndWeek;
};

export const getDate = (ref = 0) => {
  const momentDate = moment().day(ref);
  return {
    month: momentDate.format("MM"),
    date: momentDate.format("DD"),
    day: momentDate.format("dddd"),
  };
};

// export const weekOfMonth = (m) => {
//   // const result = m.week() - m(m).startOf("month").week() + 1;
//   console.log(
//     m.format("MM월") +
//       m.week() -
//       (moment(m).startOf("month").week() + 1) +
//       "주차"
//   );
// };

// const getThisSunday = (refDay) => {};

// export const getThisWeek = () => {
//   const daysOfThisWeek = [];
//   const today = new Date();
//   const dayOfToday = today.toString().slice(0, 3);
//   const thisSunday = today - GAP_FROM_SUNDAY[dayOfToday];

//   for (let i = 0; i < DAY_OF_WEEK; i++) {
//     const monthAndDay = [
//       parseNumToDate(thisSunday + i * MS_OF_DAY).monthNum,
//       parseNumToDate(thisSunday + i * MS_OF_DAY).dateNum,
//     ];
//     daysOfThisWeek.push(monthAndDay);
//   }

//   return daysOfThisWeek;
// };

// const parseNumToDate = (num) => {
//   const parsed = {};
//   const date = new Date();
//   date.setTime(num);

//   parsed.yearNum = date.getFullYear();
//   parsed.monthNum = date.getMonth() + 1;
//   parsed.dateNum = date.getDate();
//   parsed.yearParsed = parsed.yearNum.toString();
//   parsed.monthParsed = ("0" + (parsed.monthNum + 1)).slice(-2);
//   parsed.dateParsed = ("0" + parsed.dateNum).slice(-2);

//   return parsed;
// };
