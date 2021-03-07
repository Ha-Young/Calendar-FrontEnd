import { connect } from "react-redux";
import ScheduleBox from "../../components/Calendar/CalendarItem/ScheduleBox";
import { getTimeIndex } from "../../utils/getTimeIndex";
import { periodUnit, selectDate, selectTime } from "../../actions";

const mapDispatchToProps = (dispatch, { date, time }) => {
  return {
    periodToDay: () => dispatch(periodUnit()),
    updateCurrentDay: () => dispatch(selectDate(date)),
    updateSelectedTime: () => dispatch(selectTime(getTimeIndex.fromIndex(time))),
  };
};

export default connect(null, mapDispatchToProps)(ScheduleBox);
