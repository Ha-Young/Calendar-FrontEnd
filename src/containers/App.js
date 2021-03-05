import { connect } from "react-redux";
import App from "../components/App/App";
import "../css/reset.css";
import { setEventFormFor, setUserEventFor, setCurrentDate } from "../features/actionCreators";
import { getEventForm, getCurrentDate, getUserEventById, getDailyEvents, getWeeklyEvents } from "../features/selectors";

const mapStateToProps = (state) => {
  const eventInfo = getEventForm(state);
  const currentDate = getCurrentDate(state);
  const userEventById = getUserEventById(state);
  const dailyEvents = getDailyEvents(currentDate, userEventById);
  const weeklyEvents = getWeeklyEvents(currentDate, userEventById);
  return {eventInfo, currentDate, dailyEvents, weeklyEvents, userEventById};
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
