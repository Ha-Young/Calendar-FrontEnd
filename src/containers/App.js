import { connect } from "react-redux";

import { changeDate, changeViewOption } from "../actions";
import { createEvent } from "../actions/events";
import { saveSampleData } from "../api";
import App from "../components/App";

const mapStateToProps = state => ({
  viewOption: state.viewOption,
  currentDate: state.currentDate,
});

const mapDispatchToProps = dispatch => ({
  changeViewOption: viewOption => {
    dispatch(changeViewOption(viewOption));
  },
  changeCurrentDate: newDate => {
    dispatch(changeDate(newDate));
  },
  createEvent: newEvent => {
    dispatch(createEvent(newEvent));
  },
  onInitialLoad: () => {
    saveSampleData();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
