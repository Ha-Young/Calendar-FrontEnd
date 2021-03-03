import { connect } from "react-redux";
import App from "../components/App/App";
import { saveSampleData } from "../api";
import * as types from "../constants/actionTypes";

const mapStateToProps = function (state) {
  return {
    date: state.date,
    isWeeklySchedule: state.isWeeklySchedule,
    isSchedule: state.isSchedule,
    events: state.events,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onInitialLoad: () => {
      saveSampleData();
    },
    setIsSchedule: path => {
      dispatch({
        type: types.SET_IS_SCHEDULE,
        payload: path
      });
    }
    // updateNextWeek: () => {
    //   dispatch({
    //     type: types.UPDATE_NEXT_WEEK,
    //   });
    // },
    // updateLastWeek: () => {
    //   dispatch({ type: types.UPDATE_LAST_WEEK });
    // },
    // updateNextDay: () => {
    //   dispatch({
    //     type: types.UPDATE_NEXT_DAY,
    //   });
    // },
    // updatePrevDay: () => {
    //   dispatch({
    //     type: types.UPDATE_PREV_DAY,
    //   });
    // }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
