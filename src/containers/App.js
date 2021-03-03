import { connect } from "react-redux";
import App from "../components/App/App";
import "../css/reset.css";
import { setCalendarFor } from "../features/actionCreators";
import { createSelector } from "../features/selectors";
const mapStateToProps = (state) => {
  const selectorToCalendar = createSelector(state, "calendar");
  return {selectorToCalendar};
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchBundle = {
      actToCalendar: {
        setYear: (year) => dispatch(setCalendarFor.year(year)),
        setMonth: (month) => dispatch(setCalendarFor.month(month)),
        setDate: (date) => dispatch(setCalendarFor.date(date)),
        setFromHour: (hour) => dispatch(setCalendarFor.fromHour(hour)),
        setToHour: (hour) => dispatch(setCalendarFor.toHour(hour)),
      }
    }

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
