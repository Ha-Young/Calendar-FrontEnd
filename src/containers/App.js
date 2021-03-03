import { connect } from "react-redux";
import App from "../components/App/App";
import { changeToDailyMode, changeToWeeklyMode } from "../actions";
import { saveSampleData } from "../api";

const mapStateToProps = (state) => ({
  selectedDate: state.selectedDate,
  calendarMode: state.calendarMode,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onInitialLoad: () => {
      //saveSampleData();
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
