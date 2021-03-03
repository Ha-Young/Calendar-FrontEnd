import { connect } from "react-redux";
import App from "../components/App/App";
import { setCreateEventMode, setUpdateEventMode } from "../actions";

const mapStateToProps = (state) => ({
  selectedDate: state.selectedDate,
  eventMode: state.eventMode
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCreateEventMode() {
      dispatch(setCreateEventMode());
    },
    setUpdateEventMode() {
      dispatch(setUpdateEventMode());
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
