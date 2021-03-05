import { connect } from "react-redux";
import App from "../components/App/App";
import "../css/reset.css";
import { setEventFormFor, setUserEventFor, setCurrentDate } from "../features/actionCreators";
import * as selectors from "../features/selectors";

const mapStateToProps = (state) => {
  const eventInfo = selectors.getEventForm(state);
  const currentDate = selectors.getCurrentDate(state);
  const eventById = selectors.getUserEventById(state);
  const eventAllIds = selectors.getUserEventAllId(state);
  const dailyEvents = selectors.getDailyEvents(currentDate, eventById);
  const weeklyEvents = selectors.getWeeklyEvents(currentDate, eventById);
  return {eventInfo, currentDate, dailyEvents, weeklyEvents, eventById, eventAllIds};
};

const mapDispatchToProps = (dispatch) => {
  return {
    actToEventForm: {
      setYear: (year) => dispatch(setEventFormFor.year(year)),
      setMonth: (month) => dispatch(setEventFormFor.month(month)),
      setDate: (date) => dispatch(setEventFormFor.date(date)),
      setFromHour: (hour) => dispatch(setEventFormFor.fromHour(hour)),
      setToHour: (hour) => dispatch(setEventFormFor.toHour(hour)),
      setTitle: (title) => dispatch(setEventFormFor.title(title)),
      setContent: (content) => dispatch(setEventFormFor.content(content)),
      correct: (form) => dispatch(setEventFormFor.correct(form)),
    },
    actToUserEvent: {
      setEvent: (event) => dispatch(setUserEventFor.register(event)),
      clearEvent: (eventId) => dispatch(setUserEventFor.clear(eventId)),
    },
    actToCurrentDate: (dateBundle) => dispatch(setCurrentDate(dateBundle)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
