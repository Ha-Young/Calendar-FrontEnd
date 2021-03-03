import { connect } from "react-redux";
import App from "../components/App/App.jsx";
import { saveSampleData } from "../api";
import { selectDay, nextButtonClicked, prevButtonClicked, loadEvents } from "../actions/index";

// const mapDispatchToProps = () => ({
//   // This function is passed to App component.
//   onInitialLoad: () => {
//     saveSampleData();
//   },
// });
const mapStateToProps = (state) => ({
  selectedDate: state.selectedDate,
  selectedEventId: state.selectedEventId,
  viewSelector: state.viewSelector,
  events: state.events,
});

const mapDispatchToProps = {
  selectDay,
  nextButtonClicked,
  prevButtonClicked,
  loadEvents,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
