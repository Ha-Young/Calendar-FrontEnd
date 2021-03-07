import { connect } from "react-redux";
import { withRouter } from "react-router"

import { eventDetail } from "../actions/index";
import Schedule from "../components/Schedule/Schedule";

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (date, id) => {
    const { history } = ownProps;

    dispatch(eventDetail(date, id));
    history.push(`/events/${date}_${id}`);
  },
});

export default withRouter(connect(null, mapDispatchToProps)(Schedule));
