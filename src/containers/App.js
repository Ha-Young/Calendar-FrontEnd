import { connect } from "react-redux";
import App from "../components/App/App";
import "../css/reset.css";
import { setUserEventFor, setCurrentDate } from "../features/actionCreators";
import { updateEventForm } from "../features/actions/eventForm";
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
    actToUserEvent: {
      setEvent: (event) => dispatch(setUserEventFor.register(event)),
      setEventAll: (eventAll) => dispatch(setUserEventFor.registerAll(eventAll)),
      deleteEvent: (eventId) => dispatch(setUserEventFor.delete(eventId)),
    },
    actToCurrentDate: (dateBundle) => dispatch(setCurrentDate(dateBundle)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
