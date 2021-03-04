import { connect } from "react-redux";
import App from "../components/App/App.jsx";
import { saveSampleData } from "../api";
import { selectDay, nextButtonClicked, prevButtonClicked, loadEvents, toggleCalendarView } from "../actions/index";

// const mapDispatchToProps = () => ({
//   // This function is passed to App component.
//   onInitialLoad: () => {
//     saveSampleData();
//   },
// });
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
