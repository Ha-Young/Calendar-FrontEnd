import { connect } from "react-redux";
import App from "../components/App/App";
import { changeCalendarMode, moveOneDay, moveOneWeek, setCurrentDate, setCurrentWeek } from "../actions";
import { DAILY_MODE } from "../constants/dateFormats";

const mapStateToProps = ({ rootStates, dateStates }) => ({
  ...dateStates,
  calendarMode: rootStates.calendarMode
})

const mapDispatchToProps = (dispatch) => ({
  initStore: (currentDate, currentWeek, calendarMode) => {
    dispatch(setCurrentDate(currentDate));
    dispatch(setCurrentWeek(currentWeek));
    dispatch(changeCalendarMode(calendarMode));
  },
  moveDate: (calendarMode, currentDate) => {
    if (calendarMode === DAILY_MODE) return (isforWard) => dispatch(moveOneDay(isforWard, currentDate));

    return (isforWard) => dispatch(moveOneWeek(isforWard, currentDate));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
