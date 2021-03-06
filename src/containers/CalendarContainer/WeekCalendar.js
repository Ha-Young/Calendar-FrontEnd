import { connect } from "react-redux";
import WeekCalendar from "../../components/Calendar/WeekCalendar/WeekCalendar";
import { periodUnit } from "../../actions";
import { getCurrentWeek } from "../../utils/getDate";

const mapStateToProps = (state) => {
  return {
    week: getCurrentWeek(state.currentDay),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { match: { params: { unit } } } = ownProps;

  return {
    onLoad: () => dispatch(periodUnit(unit)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeekCalendar);
