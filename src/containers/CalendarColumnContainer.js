import { connect } from "react-redux";

import CalendarColumn from "../components/Calendar/CalendarColumn";

const mapStateToProps = state => {
  return {
    calendarData: state
  };
}

export default connect(mapStateToProps)(CalendarColumn);
