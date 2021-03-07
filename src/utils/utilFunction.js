import moment from "moment";
import { DATE } from "constants/constants";
import { authService } from "api/firebaseService";

export const getDateISO = (day = 0) => {
  return moment().add(day, "days").format("YYYY-MM-DD");
};

export const parseDate = (date = "") => {
  const weekOfMonth = getMonthAndWeek(date);

  return {
    year: moment(date).day(0).format("YYYY"),
    month: moment(date).format("MM"),
    date: moment(date).format("DD"),
    day: moment(date).format("ddd").toUpperCase(),
    monthInFirebase: weekOfMonth.month,
    weekOfMonth: weekOfMonth.week,
  };
};

export const getWeekOfMonth = (date = moment().day(0).format("YYYY-MM-DD")) => {
  return Math.ceil(moment(date).day(0).date() / 7).toString();
};

export const getDaysOfWeek = (day = 0) => {
  const daysOfTargetWeek = [];

  for (let i = day; i < day + DATE.DAY_OF_WEEK; i++) {
    daysOfTargetWeek.push(
      moment().day(i).format("MM DD ddd").toUpperCase().split(" ")
    );
  }

  return daysOfTargetWeek;
};

export const getMonthAndWeek = (
  date = moment().day(0).format("YYYY-MM-DD")
) => {
  const targetSunday = moment(date).day(0);
  const monthAndWeek = {};
  const weekOfMonth = Math.ceil(targetSunday.date() / 7);
  monthAndWeek.month = targetSunday.format("MM");
  monthAndWeek.week = weekOfMonth;

  return monthAndWeek;
};

export const makeFirebaseURL = (
  date = moment().day(0).format("YYYY-MM-DD")
) => {
  if (!authService.currentUser) {
    return;
  }

  const userId = authService.currentUser.uid;
  const { year, monthInFirebase, weekOfMonth } = parseDate(date);

  const url = `/events/${userId}/${year}/${monthInFirebase}/${weekOfMonth}`;

  return url;
};

export const generateKey = () => {
  let key = new Date().getTime().toString().slice(-9);
  const fullLength = 16;
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (let i = key.length; i < fullLength; i++) {
    key += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return key;
};

export const getWeeklyPosition = (startTime, endTime, date) => {
  const cardWidth = Math.floor((window.innerWidth * 81) / 100 / 7);
  const cardHeight = (endTime - startTime) * 32;
  const positionLeft = cardWidth * DATE.DAYS[parseDate(date).day];
  const positionTop = 60 + startTime * 32;

  return { cardWidth, cardHeight, positionLeft, positionTop };
};

export const getDailyPosition = (startTime, endTime) => {
  const cardWidth = Math.floor((window.innerWidth * 81) / 100);
  const cardHeight = (endTime - startTime) * 32;
  const positionLeft = 0;
  const positionTop = startTime * 32;

  return { cardWidth, cardHeight, positionLeft, positionTop };
};

export const generateColor = () => {
  const option = "345678";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += option.charAt(Math.floor(Math.random() * option.length));
  }

  return color;
};
