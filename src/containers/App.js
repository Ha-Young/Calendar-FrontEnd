import { connect } from "react-redux";
import App from "../components/App/App";
import { saveSampleData } from "../api";
import { loadDate } from "../actions";

const mapStateToProps = (state) => ({
  currentDay: state.currentDay,
});

const mapDispatchToProps = (dispatch) => ({
  // This function is passed to App component.
  onInitialLoad: () => {
    dispatch(loadDate());
    saveSampleData();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
