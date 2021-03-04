import { connect } from "react-redux";
import App from "../components/App/App";
import { saveSampleData, addfolder, updateSample, addSample } from "../api";
import {
  addEvent,
  setDaily,
  setWeekly,
} from "../actions";

const mapStateToProps = (state) => ({
  countOfDay: state.calendar.countOfDay,
  countOfWeek: state.calendar.countOfWeek,
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
    dispatch(setDaily());
  },
  setWeekly: () => {
    dispatch(setWeekly());
  },
  onSubmit: (event) => {
    dispatch(addEvent(event));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
