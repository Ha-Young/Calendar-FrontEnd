import { connect } from "react-redux";
import Calendar from "../components/Calendar/Calendar";

const mapStateToProps = (state) => ({
  isDay: state.isDay,
});

// const mapDispatchToProps = (dispatch) => ({
//   toggleDay: () => dispatch(toggleDay()),
// });

export default connect(mapStateToProps, null)(Calendar);
