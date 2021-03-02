import { connect } from "react-redux";
import App from "../components/App/App.jsx";
import { saveSampleData } from "../api";
import { selectDay, nextButtonClicked, prevButtonClicked } from "../actions/index";

// const mapDispatchToProps = () => ({
//   // This function is passed to App component.
//   onInitialLoad: () => {
//     saveSampleData();
//   },
// });
const mapStateToProps = (state) => ({
  selectedDate: state.selectedDate,
  selectedWeek: state.selectedWeek,
  selectedEventId: state.selectedEventId,
  viewSelector: state.viewSelector,
});

const mapDispatchToProps = {
  selectDay,
  nextButtonClicked,
  prevButtonClicked,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
