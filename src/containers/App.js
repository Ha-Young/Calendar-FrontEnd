import { connect } from "react-redux";

import { changeCurrentDate, changeViewOption } from "../actions";
import { createEvent } from "../actions/events";
import App from "../components/App";

const mapStateToProps = state => ({
  viewOption: state.viewOption,
  currentDate: state.currentDate,
  date: state.date,
  events: state.events,
});

const mapDispatchToProps = dispatch => ({
  changeViewOption: ({ viewOption, currentDate }) => {
    dispatch(changeViewOption({ viewOption, currentDate }));
  },
  changeCurrentDate: ({ viewOption, currentDate }) => {
    dispatch(changeCurrentDate({ viewOption, currentDate }));
  },
  createEvent: newEvent => {
    dispatch(createEvent(newEvent));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
