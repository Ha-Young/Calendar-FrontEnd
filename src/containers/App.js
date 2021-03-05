import { connect } from "react-redux";
import App from "../components/App/App";
import { saveSampleData } from "../api";
import { submitEventInfo, routeEventId, showDayCalendar, showWeekCalendar } from "../actions"

const mapStateToProps = (state) => ({
  eventInfo: state.eventInfo,
  eventIdRoute: state.eventIdRoute,
  isDayCalendar: state.isDayCalendar
});

const mapDispatchToProps = (dispatch) => ({
  onInitialLoad: () => {
    saveSampleData();
  },

  onEventInfoSubmit: (eventInfo) => {
    dispatch(submitEventInfo(eventInfo));
  },

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
