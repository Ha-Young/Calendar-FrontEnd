import { connect } from "react-redux";
import DayCalendar from "../../components/Calendar/DayCalendar/DayCalendar";
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
    onLoad: () => dispatch(periodUnit()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DayCalendar);
