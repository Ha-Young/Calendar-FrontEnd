import { connect } from "react-redux";
import App from "../components/App/App";
import { saveSampleData } from "../api";
import * as types from "../constants/actionTypes";

const mapStateToProps = function (state) {
  return {
    date: state.date,
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
    },
    addEvent: (event) => {
      dispatch({
        type: types.ADD_EVENT,
        payload: event
      })
    },
    updateEvent: (prevEvent, updatedEvent) => {
      dispatch({
        type: types.UPDATE_EVENT,
        payload: {
          prevEvent,
          updatedEvent
        }
      })
    },
    removeEvent: (event) => {
      dispatch({
        type: types.REMOVE_EVENT,
        payload: event
      })
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
