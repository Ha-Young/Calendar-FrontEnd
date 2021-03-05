import { connect } from "react-redux";
import Calendar from "../components/Calendar/Calendar";
import { routeEventId, showDayCalendar, showWeekCalendar } from "../actions"

const mapStateToProps = (state) => ({
  eventInfo: state.eventInfo,
  isDayCalendar: state.isDayCalendar
});

const mapDispatchToProps = (dispatch) => ({
  onEventIdClick: (eventId) => {
    dispatch(routeEventId(eventId));
  },

  onEventDayClick: () => {
    dispatch(showDayCalendar());
  },

  onEventWeekClick: () => {
    dispatch(showWeekCalendar());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
