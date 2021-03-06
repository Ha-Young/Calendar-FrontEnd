import { connect } from "react-redux";
import Calendar from "../components/Calendar/Calendar";
import { showDayCalendar, showWeekCalendar } from "../actions";

const mapStateToProps = (state) => ({
  eventInfo: state.eventInfo,
  isDayCalendar: state.isDayCalendar
});

const mapDispatchToProps = (dispatch) => ({
  onEventDayClick: () => {
    dispatch(showDayCalendar());
  },

  onEventWeekClick: () => {
    dispatch(showWeekCalendar());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
