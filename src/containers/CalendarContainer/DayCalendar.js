import { connect } from "react-redux";
import DayCalendar from "../../components/Calendar/DayCalendar/DayCalendar";
import { PERIOD_UNIT } from "../../constants/common";
import { getCurrentDay } from "../../utils/getDate";
import { periodUnit } from "../../actions";


const mapStateToProps = ({ currentDay }) => {
  return {
    date: currentDay,
    day: getCurrentDay(currentDay),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkPeriodUnit: () => dispatch(periodUnit(PERIOD_UNIT.DAY)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DayCalendar);
