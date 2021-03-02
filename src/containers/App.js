import { connect } from "react-redux";
import App from "../components/App/App";
import { saveSampleData } from "../api";
import * as types from "../constants/actionTypes";

const mapStateToProps = function (state) {
  return {
    date: state.date,
    isWeeklySchedule: state.isWeeklySchedule,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onInitialLoad: () => {
      saveSampleData();
    },
    updateNextWeek: () => {
      dispatch({
        type: types.UPDATE_NEXT_WEEK,
        payload: {

        }
      });
    },
    updateLastWeek: () => {
      dispatch({ type: types.UPDATE_LAST_WEEK });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
