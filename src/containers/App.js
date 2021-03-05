import { connect } from "react-redux";
import App from "../components/App/App";
import "../css/reset.css";
import { setEventFormFor, setUserEventFor, setCurrentDate } from "../features/actionCreators";
import { getDailyEvents, getWeeklyEvents } from "../utils/mapStateSupportors";

const mapStateToProps = (state) => {
  const eventFormInfo = {...state.eventForm};
  const currentDate = state.currentDate;
  const copyUserEvent = {...state.userEvent.byId};
  const dailyEvents = getDailyEvents(currentDate, copyUserEvent);
  const weeklyEvents = getWeeklyEvents(currentDate, copyUserEvent);
  return {eventFormInfo, currentDate, dailyEvents, weeklyEvents, copyUserEvent};
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
