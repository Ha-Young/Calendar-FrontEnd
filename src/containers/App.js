import { connect } from "react-redux";
import App from "../components/App/App";
import "../css/reset.css";
import { updateCurrentDate } from "../features/actions/currentDate";
import { updateEventForm } from "../features/actions/eventForm";
import { updateUserEvent, deleteUserEvent } from "../features/actions/userEvents";
import * as selectors from "../features/selectors";

const mapStateToProps = (state) => {
  const eventInfo = selectors.getEventForm(state);
  const currentDate = selectors.getCurrentDate(state);
  const eventById = selectors.getUserEventById(state);
  const dailyEvents = selectors.getDailyEvents(currentDate, eventById);
  const weeklyEvents = selectors.getWeeklyEvents(currentDate, eventById);

  return { eventInfo, currentDate, dailyEvents, weeklyEvents, eventById };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateEventForm: (formData) => dispatch(updateEventForm(formData)),
    updateUserEvent: (event) => dispatch(updateUserEvent(event)),
    deleteUserEvent: (eventId) => dispatch(deleteUserEvent(eventId)),
    updateCurrentDate: (dateBundle) => dispatch(updateCurrentDate(dateBundle)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
