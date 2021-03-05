import { connect } from "react-redux";
import App from "../components/App/App";
import { addEvent } from "../actions/index";

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  onEventInfo: (eventInfo) => {
    dispatch(addEvent(eventInfo))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
