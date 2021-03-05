import { connect } from "react-redux";

import { changeCurrentDate, changeViewOption } from "../actions";
import { receiveDate, receiveDateList } from "../actions/date";
import { resetError, viewError } from "../actions/error";
import { createdEvent } from "../actions/events";
import { startLoading, stopLoading } from "../actions/loading";
import { loginUser } from "../actions/user";
import { readDate, readDateListRange, writeEvent } from "../api";
import App from "../components/App";
import { ERROR_MSG_GET_API_ERROR } from "../constants/errorMsg";

const mapStateToProps = state => ({
  viewOption: state.viewOption,
  currentDate: state.currentDate,
  date: state.date,
  events: state.events,
  user: state.user,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = dispatch => ({
  changeViewOption: ({ viewOption, currentDate }) => {
    dispatch(changeViewOption({ viewOption, currentDate }));
  },
  changeCurrentDate: ({ viewOption, currentDate }) => {
    dispatch(changeCurrentDate({ viewOption, currentDate }));
  },
  createEvent: async ({ userId, event }) => {
    dispatch(startLoading());
    try {
      await writeEvent(userId, event);
      dispatch(createdEvent(event));
    } catch {
      dispatch(viewError(ERROR_MSG_GET_API_ERROR));
    } finally {
      dispatch(stopLoading());
    }
  },
  getDate: async ({ userId, currentDate }) => {
    dispatch(startLoading());
    try {
      const date = await readDate(userId, currentDate);
      dispatch(receiveDate(date));
    } catch {
      dispatch(viewError(ERROR_MSG_GET_API_ERROR));
    } finally {
      dispatch(stopLoading());
    }
  },
  getDateListOnRange: async ({ userId, startDate, endDate }) => {
    dispatch(startLoading());
    try {
      const dateList = await readDateListRange(userId, startDate, endDate);
      dispatch(receiveDateList(dateList));
    } catch {
      dispatch(viewError(ERROR_MSG_GET_API_ERROR));
    } finally {
      dispatch(stopLoading());
    }
  },
  stopErrorView: () => {
    dispatch(resetError());
  },
  loginUser: user => {
    dispatch(loginUser(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
