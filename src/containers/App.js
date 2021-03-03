import { connect } from "react-redux";
import App from "../components/App/App";
import { saveSampleData, addfolder, updateSample, addSample } from "../api";
import { getNextDay, getPrevDay, resetDay } from "../actions";

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  // This function is passed to App component.
  onInitialLoad: () => {
    //saveSampleData();
    //updateSample();
    //addSample();
    //addfolder();
  },
  getNextDay: () => {
    dispatch(getNextDay());
  },
  getPrevDay: () => {
    dispatch(getPrevDay());
  },
  resetDay: () => {
    dispatch(resetDay());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
