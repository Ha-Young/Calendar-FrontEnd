import { connect } from "react-redux";
import Daily from "../components/Daily/Daily";
import { nextDay, yesterDay } from "../actions";

const mapStateToProps = (state) => ({
  currentDay: state.currentDay,
  events: state.events[state.currentDay] || [],
});

const mapDispatchToProps = (dispatch) => ({
  goForward: () => {
    dispatch(nextDay());
  },
  goBackward: () => {
    dispatch(yesterDay());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Daily);
