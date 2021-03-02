import { connect } from "react-redux";

import DateSelector from "../components/DateSelector/DateSelector";
import { preDate, nextDate } from "../actions/index";

const mapStateToProps = (state) => ({
  date: state.date.format("YYYY-MM-DD"),
});

const mapDispatchToProps = (dispatch) => ({
  preDate: () => dispatch(preDate()),
  nextDate: () => dispatch(nextDate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DateSelector);
