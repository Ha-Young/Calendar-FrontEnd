import { connect } from "react-redux";
import App from "../components/App/App";
import { saveSampleData, addfolder, updateSample, addSample } from "../api";
import {
  setDaily,
  setWeekly,
} from "../actions";

const mapStateToProps = (state) => ({
  countOfDay: state.countOfDay,
  countOfWeek: state.countOfWeek,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
