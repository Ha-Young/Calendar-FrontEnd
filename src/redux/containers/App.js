import { connect } from "react-redux";

import App from "../../components/App/App";
import { addEvents, removeAllEvents, removeEvents, login, logout, newNotification, offNotification } from "../actions";
import { deleteTargetData, moveDataToLoggedInUser } from "../../api";
import { googleAuthLogin } from "../../api/googleAuthLogin";

const mapStateToProps = (state) => ({
  events: state.events,
  login: state.login,
  notification: state.notification,
});

const mapDispatchToProps = (dispatch) => ({
  addEvents: (date, event) => {
    dispatch(addEvents(date, event));
  },
  removeEvents: (userId, date, startAt, endAt) => {
    const time = startAt + endAt;
    deleteTargetData(userId, date, startAt, endAt);
    dispatch(removeEvents(date, time));
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
