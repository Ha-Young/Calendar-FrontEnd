import { connect } from "react-redux";
import Calendar from "../components/Calendar/Calendar";
import { setCurrentWeek, setCurrentDay, setIsWeekMode } from "../actions/index";
import {sub, add, eachDayOfInterval, getDay, getDate, format } from "date-fns";

const refineWeek = (currentWeek) => {
  const daysOfWeek = 
  [
    "Sunday", "Monday", "Tuesday", 
    "Wednesday", "Thursday", "Friday", "Saturday"
  ];

  return currentWeek.length 
    ? currentWeek.map((val) => {
      return {
        originalDate: val,
        date: getDate(val),
        dayOfWeek: daysOfWeek[getDay(val)],
        formatString: format(val, "yyyy-MM-dd"),
      }
    }) 
    : null;
}

const getWeekFromDate = (date) => {
  const current = date;
      
  if (!current instanceof Date) {
    throw new Error("date arg is must be Date instance.");
  }

  const start = sub(current, {days: getDay(current)});
  const end = add(start, { days: 6 });
  
  return eachDayOfInterval({
    start,
    end
  });
}

const mapStateToProps = (state) => ({
  isWeekMode: state.date.isWeekMode,
  currentDay: state.date.currentDay,
  currentWeek: refineWeek(state.date.currentWeek),
});

const mapDispatchToProps = (dispatch) => ({  
  setCurrentWeek: (date) => {
    dispatch(
      setCurrentWeek(
        getWeekFromDate(date)
      )
    );
  },

  setCurrentDay: (date) => {
    dispatch(setCurrentDay(date));
  },
  
  setIsWeekMode: (isWeekMode) => {
    dispatch(setIsWeekMode(isWeekMode));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
