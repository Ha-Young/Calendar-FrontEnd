import { connect } from "react-redux";
import App from "../components/App/App";
import "../css/reset.css";
import { setCalendarFor } from "../features/actionCreators";
const mapStateToProps = (state) => ({
  something: "Mapping redux state to App component props.",
});

const mapDispatchToProps = (dispatch) => {
  return {
    actToCalendar: {
      setYear: (year) => dispatch(setCalendarFor.year(year)),
      setMonth: (month) => dispatch(setCalendarFor.month(month)),
      setDate: (date) => dispatch(setCalendarFor.date(date)),
      setFromHour: (hour) => dispatch(setCalendarFor.fromHour(hour)),
      setToHour: (hour) => dispatch(setCalendarFor.toHour(hour)),
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
