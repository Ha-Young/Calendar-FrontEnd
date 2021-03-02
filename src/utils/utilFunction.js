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
