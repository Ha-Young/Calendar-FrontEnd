import { connect } from "react-redux";

import { changeViewOption } from "../actions";
import { saveSampleData } from "../api";
import App from "../components/App";

const mapStateToProps = state => ({
  viewOption: state.viewOption,
});

const mapDispatchToProps = dispatch => ({
  changeViewOption: viewOption => {
    dispatch(changeViewOption(viewOption));
  },

  onInitialLoad: () => {
    saveSampleData();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
