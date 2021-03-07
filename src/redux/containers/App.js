import { connect } from "react-redux";

import App from "../../components/App/App";
import { addEvents, removeAllEvents, removeEvents, login, logout, newNotification, offNotification } from "../actions";
import { deleteTargetData, getDailyData, moveDataToLoggedInUser, writeUserData } from "../../api";
import { googleAuthLogin } from "../../api/googleAuthLogin";
import { isObject } from "../../utils/typeCheck";

const mapStateToProps = (state) => ({
  events: state.events,
  login: state.login,
  notification: state.notification,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDailyEvent: async (userId, date) => {
    try {
      const data = await getDailyData(userId, date);
      if (isObject(data)) {
        dispatch(addEvents(date, data));
      }
    } catch (error) {
      console.error(error);
      dispatch(newNotification("FAILED TO GET DAILY DATA, TRY AGAIN"));
    }
  },
  removeEvents: (userId, date, startAt, endAt) => {
    const time = startAt + endAt;
    deleteTargetData(userId, date, startAt, endAt);
    dispatch(removeEvents(date, time));
  },
  writeUserDataToFirebase: (userData) => {
    try {
      writeUserData(userData);
    } catch (error) {
      dispatch(newNotification(error.message));
    }
  },
  toggleLogin: async (isLoggedIn) => {
    if (isLoggedIn) {
      dispatch(logout());
      dispatch(removeAllEvents());
      localStorage.setItem("userId", "");
      return;
    }
    
    try {
      const userId = await googleAuthLogin();

      moveDataToLoggedInUser(userId);
      dispatch(removeAllEvents());
      dispatch(login(userId));
      localStorage.setItem("userId", userId);
    } catch (error) {
      dispatch(newNotification(error.message));
    }
  },
  offNotification: () => {
    dispatch(offNotification());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
