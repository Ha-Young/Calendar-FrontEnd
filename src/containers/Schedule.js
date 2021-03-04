import { connect } from "react-redux";

import { eventDetail } from "../actions/index";
import Schedule from "../components/Schedule/Schedule";

const mapDispatchToProps = (dispatch) => ({
  setTargetEvent: (date, id) => dispatch(eventDetail(date, id)),
});

export default connect(null, mapDispatchToProps)(Schedule);
