import { connect } from "react-redux";
import App from "../components/App/App";
import "../css/reset.css";
import { setEventFormFor, setUserEventFor } from "../features/actionCreators";

const mapStateToProps = (state) => {
  const eventFormInfo = {... state.eventForm};
  return {eventFormInfo};
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
