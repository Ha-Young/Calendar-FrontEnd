import { connect } from "react-redux";
import ScheduleContainer from "../../components/Calendar/CalendarItem/ScheduleContainer";

const mapStateToProps = ({ events }) => {
  return { events };
};

export default connect(mapStateToProps, null)(ScheduleContainer);
