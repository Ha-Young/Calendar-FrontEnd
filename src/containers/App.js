import { connect } from "react-redux";
import App from "../components/App/App";
import { getFirebaseData } from "../api";
import {
  addEvent,
  setDayPage,
  setWeekPage,
  setEventPage,
  deleteEvent,
  getEvents,
} from "../actions";

const mapStateToProps = (state) => ({
  countOfDay: state.calendar.countOfDay,
  countOfWeek: state.calendar.countOfWeek,
  events: state.event,
});

const mapDispatchToProps = (dispatch) => ({
  // This function is passed to App component.
  onInitialLoad: () => {
    /* 현재 파이어베이스의 데이터로 state를 초기화하는것까지 구현되어 작동되지 않게 해두었습니다..
    getFirebaseData((data) => {
      dispatch(getEvents(data));
    }); 
    */
  },
  setDaily: () => {
    dispatch(setDayPage());
  },
  setWeekly: () => {
    dispatch(setWeekPage());
  },
  setEvent: () => {
    dispatch(setEventPage());
  },
  deleteEvent: (event) => {
    dispatch(deleteEvent(event));
  },
  onSubmit: (event) => {
    dispatch(addEvent(event));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
