import { connect } from "react-redux";
import App from "../components/App/App";
import { saveSampleData, addfolder, updateSample, addSample } from "../api";
import {
  addEvent,
  setDayPage,
  setWeekPage,
  setEventPage,
  deleteEvent,
} from "../actions";

const mapStateToProps = (state) => ({
  countOfDay: state.calendar.countOfDay,
  countOfWeek: state.calendar.countOfWeek,
  events: state.event,
});

const mapDispatchToProps = (dispatch) => ({
  // This function is passed to App component.
  onInitialLoad: () => {
    //saveSampleData();
    //updateSample();
    //addSample();
    //addfolder();
  },
  setDaily: () => {
    dispatch(setDayPage());
  },
  setWeekly: () => {
    dispatch(setWeekPage());
  },
  setEvent: () => {
    dispatch(setEventPage());
  },
  deleteEvent: (event) => {
    dispatch(deleteEvent(event));
  },
  onSubmit: (event) => {
    dispatch(addEvent(event));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
