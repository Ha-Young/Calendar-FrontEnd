import { connect } from "react-redux";
import App from "../components/App/App";
import { saveSampleData } from "../api";
import { submitEventInfo } from "../actions"

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  onInitialLoad: () => {
    saveSampleData();
  },
  onEventInfoSubmit: (eventInfo) => {
    dispatch(submitEventInfo(eventInfo));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
