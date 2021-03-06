import { connect } from "react-redux";
import App from "../components/App/App";
import "../css/reset.css";
import { setEventFormFor, setUserEventFor, setCurrentDate } from "../features/actionCreators";
import * as selectors from "../features/selectors";

const mapStateToProps = (state) => {
  const eventInfo = selectors.getEventForm(state);
  const currentDate = selectors.getCurrentDate(state);
  const eventById = selectors.getUserEventById(state);
  const dailyEvents = selectors.getDailyEvents(currentDate, eventById);
  const weeklyEvents = selectors.getWeeklyEvents(currentDate, eventById);

  return {eventInfo, currentDate, dailyEvents, weeklyEvents, eventById};
};

const mapDispatchToProps = (dispatch) => {
  return {
    actToEventForm: {
      setTitle: (title) => dispatch(setEventFormFor.title(title)),
      setContent: (content) => dispatch(setEventFormFor.content(content)),
      setYear: (year) => dispatch(setEventFormFor.year(year)),
      setMonth: (month) => dispatch(setEventFormFor.month(month)),
      setDate: (date) => dispatch(setEventFormFor.date(date)),
      setFromHour: (hour) => dispatch(setEventFormFor.fromHour(hour)),
      setToHour: (hour) => dispatch(setEventFormFor.toHour(hour)),
      setAllDate: (dateForm) => dispatch(setEventFormFor.allDate(dateForm)),
      correct: (form) => dispatch(setEventFormFor.correct(form)),
      clearForm: (form) => dispatch(setEventFormFor.clearForm(form)),
    },
    actToUserEvent: {
      setEvent: (event) => dispatch(setUserEventFor.register(event)),
      setEventAll: (eventAll) => dispatch(setUserEventFor.registerAll(eventAll)),
      deleteEvent: (eventId) => dispatch(setUserEventFor.delete(eventId)),
    },
    actToCurrentDate: (dateBundle) => dispatch(setCurrentDate(dateBundle)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
