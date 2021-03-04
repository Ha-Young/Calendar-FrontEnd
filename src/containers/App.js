import { connect } from "react-redux";
import App from "../components/App/App";
import { setSelectedDate, setCreateEventMode, setUpdateEventMode } from "../actions";

const today = new Date();

const mapStateToProps = (state) => ({
  selectedDate: state.calendar.selectedDate,
  eventMode: state.event.eventMode,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCreateEventMode() {
      dispatch(setCreateEventMode());
    },
    setUpdateEventMode() {
      dispatch(setUpdateEventMode());
    },
    setSelectedDateWithToday() {
      dispatch(setSelectedDate(today));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
