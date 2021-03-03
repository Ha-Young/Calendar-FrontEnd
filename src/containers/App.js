import { connect } from "react-redux";
import App from "../components/App/App";
import { saveSampleData } from "../api";
import { changeCalendarMode, setCurrentDate, setCurrentWeek } from "../actions";

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
});

export default connect(null, mapDispatchToProps)(App);
