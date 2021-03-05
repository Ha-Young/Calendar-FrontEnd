import { connect } from "react-redux";
import { deleteTargetData, moveDataToLoggedInUser } from "../../api";
import { loginWithGoogle } from "../../api/google-login";
import App from "../../components/App/App";
import { ADD_TO_EVENTS, ERROR, LOGIN, LOGOUT, REMOVE_EVENTS } from "../../constants/actionTypes";

const mapStateToProps = (state) => ({
  events: state.events,
  auth: state.login,
});

const mapDispatchToProps = (dispatch) => ({
  addEvents: (date, event) => {
    dispatch({type: ADD_TO_EVENTS, payload: { date, event }});
  },

  removeEvents: (userId, date, startAt, endAt) => {
    const time = startAt + endAt;
    deleteTargetData(userId, date, startAt, endAt);
    dispatch({type: REMOVE_EVENTS, payload: { date, time}});
  },

  onClickLogin: async (isLoggedIn) => {
    const type = isLoggedIn ? LOGOUT : LOGIN;

    if (type === LOGOUT) {
      dispatch({type: LOGOUT});
      localStorage.setItem("userId", "");
      return;
    }

    const [isSuccess, data] = await loginWithGoogle();
  
    if (isSuccess) {
      dispatch({type: LOGIN, payload: { userId: data }});
      moveDataToLoggedInUser(data);
      localStorage.setItem("userId", data);
      return;
    }

    dispatch({type: ERROR, payload: { error: data }});
    return;
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
