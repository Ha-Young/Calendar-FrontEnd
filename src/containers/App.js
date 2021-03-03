import { connect } from "react-redux";
import App from "../components/App/App";
import "../css/reset.css";
import { setCalendarFor, setUserEvent } from "../features/actionCreators";
import { createSelector } from "../features/selectors";

const mapStateToProps = (state) => {
  const selectorToCalendar = createSelector(state,"calendar");
  const eventDateInfo = {...selectorToCalendar()};
  return {eventDateInfo};
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchBundle: {
      actToCalendar: {
        setYear: (year) => dispatch(setCalendarFor.year(year)),
        setMonth: (month) => dispatch(setCalendarFor.month(month)),
        setDate: (date) => dispatch(setCalendarFor.date(date)),
        setFromHour: (hour) => dispatch(setCalendarFor.fromHour(hour)),
        setToHour: (hour) => dispatch(setCalendarFor.toHour(hour)),
      },
      actToEvent: {setEvent: (event) => dispatch(setUserEvent(event))}
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
