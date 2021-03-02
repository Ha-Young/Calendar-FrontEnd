import { connect } from "react-redux";
import Calendar from "../components/Calendar/Calendar";
import { setCurrentWeek, setCurrentDay } from "../actions/index";
import getWeek from "../util/getWeekFromDate";

const mapStateToProps = (state) => ({
  currentDay: state.date.currentDay,
  currentWeek: state.date.currentWeek,
});

const mapDispatchToProps = (dispatch) => ({  
  setCurrentWeek: (date) => {
    dispatch(
      setCurrentWeek(
        getWeek(date)
      )
    );
  },

  setCurrentDay : (date) => {
    dispatch(setCurrentDay(date));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
