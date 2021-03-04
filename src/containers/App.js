import { connect } from "react-redux";
import App from "../components/App/App.jsx";
import { selectDay, nextButtonClicked, prevButtonClicked, loadEvents, toggleCalendarView } from "../actions/index";

// TODO 앱에서 쓰는 prop이랑 action만 내려보내야함
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
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
