import { connect } from "react-redux";
import Weekly from "../components/Weekly/Weekly";
import { getWeekEventData, setCurrentDay } from "../actions";

const mapStateToProps = (state) => ({
  currentDay: state.currentDay,
  weekEvents: state.weekEvents,
  totalEvents: state.events,
});

const mapDispatchToProps = (dispatch) => ({
  getWeekEventData: (week, totalEvents) => {
    dispatch(getWeekEventData(week, totalEvents));
  },
  setCurrentDay: (days) => {
    dispatch(setCurrentDay(days));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Weekly);
