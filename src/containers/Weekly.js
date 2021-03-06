import { connect } from "react-redux";
import Weekly from "../components/Weekly/Weekly";
import { getWeekEventData } from "../actions";

const mapStateToProps = (state) => ({
  currentDay: state.currentDay,
  weekEvents: state.weekEvents,
});

const mapDispatchToProps = (dispatch) => ({
  getWeekEventData: (week) => {
    dispatch(getWeekEventData(week));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Weekly);
