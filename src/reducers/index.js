import { combineReducers } from 'redux';
import { monthDays } from '../constants';

const date = new Date().getDate();
const dayIndex = new Date().getDay() - 1;
let currentMondayDate = (new Date().getDate()) - (new Date().getDay() - 1);
let monthWeekly = new Date().getMonth();

if (currentMondayDate <= 0) {
  currentMondayDate = monthDays[new Date().getMonth() - 1] + currentMondayDate;
  monthWeekly = monthWeekly - 1;
}

const initialDayAndDate = {
  shouldLoadDailyPage: true,
  date: date,
  day: dayIndex,
  monday: currentMondayDate,
  monthDaily: new Date().getMonth(),
  monthWeekly: monthWeekly
};

const updateDateReducer = (dateAndDay = initialDayAndDate, action) => {
  if (action.type === 'CHANGE_TO_DAILY_MODE') {
    return {
      ...dateAndDay,
      shouldLoadDailyPage: true
    };
  }

  if (action.type === 'CHANGE_TO_WEEKLY_MODE') {
    return {
      ...dateAndDay,
      shouldLoadDailyPage: false
    };
  }

  if (action.type === 'GOTO_NEXT') {
    if (dateAndDay.shouldLoadDailyPage) {
      if (dateAndDay.date === monthDays[dateAndDay.monthDaily]) {
        return {
          ...dateAndDay,
          date: 1,
          day: dateAndDay.day + 1,
          monthDaily: dateAndDay.monthDaily + 1
        }
      } else return {
        ...dateAndDay,
        date: dateAndDay.date + 1,
        day: dateAndDay.day + 1,
      }
    } else {
      if (dateAndDay.monday > monthDays[dateAndDay.monthWeekly] - 7) {
        return {
          ...dateAndDay,
          monday: dateAndDay.monday + 7 - monthDays[dateAndDay.monthWeekly],
          monthWeekly: dateAndDay.monthWeekly + 1
        }
      } else return {
        ...dateAndDay,
        monday: dateAndDay.monday + 7
      }
    }
  }

  if (action.type === 'GOTO_PREV') {
    if (dateAndDay.shouldLoadDailyPage) {
      if (dateAndDay.date === 1) {
        return {
          ...dateAndDay,
          date: monthDays[dateAndDay.monthDaily - 1],
          day: dateAndDay.day - 1,
          monthDaily: dateAndDay.monthDaily - 1
        }
      } else return {
        ...dateAndDay,
        date: dateAndDay.date - 1,
        day: dateAndDay.day - 1,
      }
    } else {
      if (dateAndDay.monday <= 7) {
        return {
          ...dateAndDay,
          monday: dateAndDay.monday - 7 + monthDays[dateAndDay.monthWeekly - 1],
          monthWeekly: dateAndDay.monthWeekly - 1
        }
      } else return {
        ...dateAndDay,
        monday: dateAndDay.monday - 7
      }
    }
  }

  return dateAndDay;
};

const addEventReducer = (listOfEvents = {}, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return {...listOfEvents, ...action.payload};
    default:
      return listOfEvents;
  }
};

const selectEventReducer = (selectedEvent = null, action) => {
  if (action.type === 'SELECT_EVENT') {
    return action.payload;
  }
  return selectedEvent;
};

export default combineReducers({
  updateDateReducer,
  addEventReducer,
  selectEventReducer
});
