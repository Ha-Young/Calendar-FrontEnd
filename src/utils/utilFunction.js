import moment from "moment";
import { dateConst } from "constants/constants";
import { authService } from "api/firebaseService";

export const getDateISO = (ref = 0) => {
  return moment().add(ref, "days").format("YYYY-MM-DD");
};

export const parseDate = (date = "") => {
  const weekOfMonth = getMonthAndWeek(date);

  return {
    year: moment(date).day(0).format("YYYY"),
    month: moment(date).format("MM"),
    weekOfMonth: weekOfMonth.week,
    date: moment(date).format("DD"),
    day: moment(date).format("dddd"),
    monthInFirebase: weekOfMonth.month,
  };
};

export const getWeekOfMonth = (date = "") => {
  return Math.ceil(moment(date).day(0).date() / 7).toString();
};

export const getDaysOfWeek = (ref = 0) => {
  const thisWeek = [];

  for (let i = ref; i < ref + dateConst.DAY_OF_WEEK; i++) {
    thisWeek.push(moment().day(i).format("MM DD dddd").split(" "));
  }

  return thisWeek;
};

export const getMonthAndWeek = (date = "") => {
  const target = moment(date).day(0);
  const monthAndWeek = {};
  const weekOfMonth = Math.ceil(target.date() / 7);
  monthAndWeek.month = target.format("MM");
  monthAndWeek.week = weekOfMonth;

  return monthAndWeek;
};

export const makeFirebaseURL = (date) => {
  const userId = authService.currentUser.uid;
  const { year, monthInFirebase, weekOfMonth } = parseDate(date);

  const url = `/events/${userId}/${year}/${monthInFirebase}/${weekOfMonth}`;

  return url;
};

export const generateKey = (ref = 0) => {
  let key = new Date().getTime().toString();
  const fullLength = 20;
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (let i = key.length; i < fullLength; i++) {
    key += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return key;
};
