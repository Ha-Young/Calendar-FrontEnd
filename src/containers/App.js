import { connect } from "react-redux";
import App from "../components/App/App";
import { saveSampleData } from "../api";
import { submitEventInfo, routeEventId } from "../actions"

const mapStateToProps = (state) => ({
  eventInfo: state.eventInfo,
  eventIdRoute: state.eventIdRoute
});

const mapDispatchToProps = (dispatch) => ({
  onInitialLoad: () => {
    saveSampleData();
  },

  onEventInfoSubmit: (eventInfo) => {
    dispatch(submitEventInfo(eventInfo));
  },

  onEventIdClick: (eventId) => {
    dispatch(routeEventId(eventId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
