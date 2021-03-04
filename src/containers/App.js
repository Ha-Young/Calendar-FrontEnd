import { connect } from "react-redux";

import { changeCurrentDate, changeViewOption } from "../actions";
import { createEvent } from "../actions/events";
import { writeEvent } from "../api";
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
  // 질문. userId도 같이?
  createEvent: ({ userId, event }) => {
    dispatch(createEvent(event));
    writeEvent(userId, event);
  },
});

//Todo. HOC으로 routerhistory props에 담아 내려줄 수 있게 하기.
export default connect(mapStateToProps, mapDispatchToProps)(App);
