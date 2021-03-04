import { connect } from "react-redux";
import App from "../components/App/App";
import "../css/reset.css";
import { setEventFormFor, setUserEventFor } from "../features/actionCreators";
import { getDailyEvents } from "../utils/mapStateSupportors";

const mapStateToProps = (state) => {
  const eventFormInfo = {...state.eventForm};
  const currentDate = state.currentDate;
  const copyUserEvent = {...state.userEvent.byId};
  const dailyEvents = getDailyEvents(currentDate.getDate(), copyUserEvent);
  console.log(dailyEvents);
  // weekly 이벤트 데이터, daily 이벤트 데이터 각각 처리해서 반환.
  return {eventFormInfo, currentDate, dailyEvents};
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
    },
    actToUserEvent: {
      setEvent: (event) => dispatch(setUserEventFor.register(event)),
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
