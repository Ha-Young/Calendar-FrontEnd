import { connect } from "react-redux";
import Daily from "../components/Schedule/Daily";
import { goPrevDate, goNextDate, setDailyCalendarMode } from "../actions";

const mapStateToProps = (state) => ({
  today: state.calendar.today,
  selectedDate: state.calendar.selectedDate,
  calendarMode: state.calendar.calendarMode,
});

const mapDispatchToProps = (dispatch) => {
  return {
    goPrevDate() {
      dispatch(goPrevDate());
    },
    goNextDate() {
      dispatch(goNextDate());
    },
    setDailyCalendarMode() {
      dispatch(setDailyCalendarMode());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (Daily);
