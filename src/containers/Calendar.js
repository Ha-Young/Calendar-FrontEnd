import { connect } from "react-redux";
import Calendar from "../components/Calendar/Calendar";

const mapStateToProps = (state) => ({
  isDaily: state.isDaily,
});

// const mapDispatchToProps = (dispatch) => ({
//   toggleDay: () => dispatch(toggleDay()),
// });

export default connect(mapStateToProps, null)(Calendar);
