import { connect } from "react-redux";
import Weekly from "../components/Schedule/Weekly";
import { goLastWeek, goNextWeek, setWeeklyCalendarMode } from "../actions";

const mapStateToProps = (state) => ({
  today: state.calendar.today,
  selectedDate: state.calendar.selectedDate,
  week: state.calendar.week,
  calendarMode: state.calnedar.calendarMode,
});

const mapDispatchToProps = (dispatch) => {
  return {
    goLastWeek() {
      dispatch(goLastWeek());
    },
    goNextWeek() {
      dispatch(goNextWeek());
    },
    setWeeklyCalendarMode() {
      dispatch(setWeeklyCalendarMode());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (Weekly);
