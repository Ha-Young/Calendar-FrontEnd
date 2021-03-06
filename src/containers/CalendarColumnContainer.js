import { connect } from "react-redux";

import CalendarColumn from "../components/Calendar/CalendarColumn";

const mapStateToProps = state => {
  return {
    events: state
  };
}

export default connect(mapStateToProps, null)(CalendarColumn);
