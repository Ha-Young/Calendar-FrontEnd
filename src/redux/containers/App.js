import { connect } from "react-redux";

import { deleteTargetData, moveDataToLoggedInUser } from "../../api";
import { loginWithGoogle } from "../../api/google-login";
import App from "../../components/App/App";
import { addEvents, error, login, logout, removeAllEvents, removeEvents } from "../actions";

const mapStateToProps = (state) => ({
  events: state.events,
  auth: state.login,
  userId: state.login.userId,
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
  onClickLogin: async (isLoggedIn) => {
    if (isLoggedIn) {
      dispatch(logout());
      dispatch(removeAllEvents());
      localStorage.setItem("userId", "");
      return;
    }

    const [isSuccess, data] = await loginWithGoogle();
  
    if (isSuccess) {
      moveDataToLoggedInUser(data);
      dispatch(removeAllEvents());
      dispatch(login(data));
      localStorage.setItem("userId", data);
      return;
    }

    error(data);
    return;
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
