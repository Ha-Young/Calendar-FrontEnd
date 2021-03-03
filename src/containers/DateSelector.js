import { connect } from "react-redux";

import DateSelector from "../components/DateSelector/DateSelector";
import { prevDate, nextDate, prevWeek, nextWeek } from "../actions/index";

const mapStateToProps = (state) => ({
  date: state.date.format("YYYY-MM-DD"),
});

const mapDispatchToProps = (dispatch) => ({
  prevDate: () => dispatch(prevDate()),
  nextDate: () => dispatch(nextDate()),
  prevWeek: () => dispatch(prevWeek()),
  nextWeek: () => dispatch(nextWeek()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DateSelector);
