import { connect } from "react-redux";
import App from "../components/App/App";
import { setSelectedDate, setCreateEventMode, setUpdateEventMode, saveEvent, deleteEvent } from "../actions";

const mapStateToProps = (state) => ({
  selectedDate: state.calendar.selectedDate,
  eventMode: state.event.eventMode,
  eventsInStore: state.event.events,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCreateEventMode() {
      dispatch(setCreateEventMode());
    },
    setUpdateEventMode() {
      dispatch(setUpdateEventMode());
    },
    setSelectedDate(date) {
      dispatch(setSelectedDate(date));
    },
    saveEventInStore(date, eventList) {
      dispatch(saveEvent(date, eventList));
    },
    deleteEventInStore(date, startTime) {
      dispatch(deleteEvent(date, startTime));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
