import { connect } from "react-redux";
import CalendarContents from "../components/CalendarContents/CalendarContents.jsx";
import { selectDay, nextButtonClicked, prevButtonClicked, loadEvents, toggleCalendarView } from "../actions/index";

const mapStateToProps = (state) => ({
  selectedDate: state.selectedDate,
  calculatedDates: state.calculatedDates,
  events: state.events,
  selectedEventId: state.selectedEventId,
  isDailyView: state.isDailyView,
});

const mapDispatchToProps = {
  selectDay,
  nextButtonClicked,
  prevButtonClicked,
  loadEvents,
  toggleCalendarView,
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContents);
