import { connect } from "react-redux";
import Calendar from "../components/Calendar/Calendar";
import { setCurrentWeek, setCurrentDay } from "../actions/index";
import getWeekFromDate from "../util/getWeekFromDate";
import refineWeek from "../util/refineWeek";

const mapStateToProps = (state) => ({
  currentDay: state.date.currentDay,
  currentWeek: refineWeek(state.date.currentWeek),
});

const mapDispatchToProps = (dispatch) => ({  
  setCurrentWeek: (date) => {
    dispatch(
      setCurrentWeek(
        getWeekFromDate(date)
      )
    );
  },

  setCurrentDay : (date) => {
    dispatch(setCurrentDay(date));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
