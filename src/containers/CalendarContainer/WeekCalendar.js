import { connect } from "react-redux";
import WeekCalendar from "../../components/Calendar/WeekCalendar/WeekCalendar";
import { PERIOD_UNIT } from "../../constants/common";
import { getCurrentWeek } from "../../utils/getDate";
import { periodUnit } from "../../actions";

const mapStateToProps = ({ currentDay }) => {
  return {
    week: getCurrentWeek(currentDay),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkPeriodUnit: () => dispatch(periodUnit(PERIOD_UNIT.WEEK)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeekCalendar);
