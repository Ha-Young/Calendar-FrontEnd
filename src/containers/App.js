import { connect } from "react-redux";
import App from "../components/App/App";
import { saveSampleData } from "../api";

const mapStateToProps = function (state) {
  return {
    dateObject: {
      year: state.dateObject.year,
      month: state.dateObject.month,
      date: state.dateObject.date,
      day: state.dateObject.day
    },
    isWeeklySchedule: state.isWeeklySchedule,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onInitialLoad: () => {
      saveSampleData();
    },
    // checkLoggedIn: () => {
    //   dispatch({ type: CHECK_LOGGED_IN })
    // }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
