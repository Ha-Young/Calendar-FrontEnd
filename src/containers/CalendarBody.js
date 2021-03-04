import { connect } from "react-redux";
import CalendarBody from "../components/CalendarBody/CalendarBody.jsx";
import { selectDay, nextButtonClicked, prevButtonClicked, loadEvents, toggleCalendarView, selectEvent } from "../actions/index";

const mapStateToProps = (state) => ({
  selectedDate: state.selectedDate,
  calculatedDates: state.calculatedDates,
  events: state.events,
  selectedEventInfo: state.selectedEventInfo,
  isDailyView: state.isDailyView,
});

const mapDispatchToProps = {
  selectDay,
  nextButtonClicked,
  prevButtonClicked,
  loadEvents,
  toggleCalendarView,
  selectEvent,
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarBody);
