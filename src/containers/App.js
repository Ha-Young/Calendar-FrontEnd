import { connect } from "react-redux";
import App from "../components/App/App.jsx";
import { selectDay, nextButtonClicked, prevButtonClicked, toggleCalendarView } from "../actions/index";

const mapStateToProps = (state) => ({
  selectedDate: state.selectedDate,
  events: state.events,
  selectedEventInfo: state.selectedEventInfo,
  isDailyView: state.isDailyView,
});

const mapDispatchToProps = {
  selectDay,
  nextButtonClicked,
  prevButtonClicked,
  toggleCalendarView,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
