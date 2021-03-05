import { connect } from "react-redux";
import Control from "../components/Header/Control/index";
import {
  movePrevDay,
  moveNextDay,
  movePrevWeek,
  moveNextWeek,
  resetDay,
} from "../actions";

const mapStateToProps = (state) => ({
  currentPage: state.calendar.currentPage,
  day: state.calendar.countOfDay,
  week: state.calendar.countOfWeek,
});

const mapDispatchToProps = (dispatch) => ({
  prevDay: () => {
    dispatch(movePrevDay());
  },
  nextDay: () => {
    dispatch(moveNextDay());
  },
  prevWeek: () => {
    dispatch(movePrevWeek());
  },
  nextWeek: () => {
    dispatch(moveNextWeek());
  },
  resetDay: () => {
    dispatch(resetDay());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Control);
