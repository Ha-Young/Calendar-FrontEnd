import { connect } from "react-redux";
import Daily from "../components/Daily/Daily";
import { setCurrentDay } from "../actions";

const mapStateToProps = (state) => ({
  currentDay: state.currentDay,
  events: state.events[state.currentDay],
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentDay: (days) => {
    dispatch(setCurrentDay(days));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Daily);
