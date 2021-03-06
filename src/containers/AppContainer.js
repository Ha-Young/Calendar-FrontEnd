import { connect } from "react-redux";
import App from "../components/App/App.jsx";
import { selectDay } from "../actions/index";

const mapStateToProps = (state) => ({
  selectedDate: state.selectedDate,
  selectedEventInfo: state.selectedEventInfo,
  isDailyView: state.isDailyView,
});

const mapDispatchToProps = {
  selectDay,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
