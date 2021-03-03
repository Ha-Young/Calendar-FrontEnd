import { connect } from "react-redux";
import App from "../components/App/App";
import { saveSampleData } from "../api";
import { changeCalendarMode, moveOneDay, moveOneWeek, setCurrentDate, setCurrentWeek } from "../actions";
import { DAILY_MODE } from "../constants/dateFormats";

const mapStateToProps = (state) => ({
  currentDate: state.currentDate,
  calendarMode: state.calendarMode
})

const mapDispatchToProps = (dispatch) => ({
  onInitialLoad: () => {
    // 이건.... side effect인데... 끝난 결과를 가지고 dispatch하면!
    return saveSampleData();
  },
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
