import { connect } from "react-redux";
import App from "../components/App/App";
import { saveSampleData } from "../api";
import { changeCalendarType } from "../actions/index";

const mapStateToProps = (state) => ({
  something: state,
});

const mapDispatchToProps = (dispatch) => ({
  // This function is passed to App component.
  onInitialLoad: () => {
    saveSampleData();
  },
  changeCalendarType: (ev) => {
    if (ev.target.value === "day") {
      dispatch(changeCalendarType({ isDaily: true, interval: 1 }));
    } else {
      dispatch(changeCalendarType({ isDaily: false, interval: 7 }));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
