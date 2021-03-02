import { connect } from "react-redux";

import { changeDate, changeViewOption } from "../actions";
import { saveSampleData } from "../api";
import App from "../components/App";

const mapStateToProps = state => ({
  viewOption: state.viewOption,
  currentDate: state.currentDate,
});

const mapDispatchToProps = dispatch => ({
  changeViewOption: viewOption => {
    dispatch(changeViewOption(viewOption));
  },
  changeCurrentDate: newDate => {
    dispatch(changeDate(newDate));
  },
  onInitialLoad: () => {
    saveSampleData();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
