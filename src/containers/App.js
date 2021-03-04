import { connect } from "react-redux";

import { changeCurrentDate, changeViewOption } from "../actions";
import { receiveDate, receiveDateList } from "../actions/date";
import { createEvent } from "../actions/events";
import { startLoading } from "../actions/loading";
import { readDate, readDateListRange, writeEvent } from "../api";
import App from "../components/App";

const mapStateToProps = state => ({
  viewOption: state.viewOption,
  currentDate: state.currentDate,
  date: state.date,
  events: state.events,
  user: state.user,
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
  onInitLoad: async ({ userId, currentDate }) => {
    dispatch(startLoading());
    const date = await readDate(userId, currentDate);
    dispatch(receiveDate(date));
  },
  getDate: async ({ userId, currentDate }) => {
    dispatch(startLoading());
    const date = await readDate(userId, currentDate);
    dispatch(receiveDate(date));
  },
  getDateListOnRange: async ({ userId, startDate, endDate }) => {
    dispatch(startLoading());
    const dateList = await readDateListRange(userId, startDate, endDate);
    dispatch(receiveDateList(dateList));
  },
});

//Todo. HOC으로 routerhistory props에 담아 내려줄 수 있게 하기.
export default connect(mapStateToProps, mapDispatchToProps)(App);
