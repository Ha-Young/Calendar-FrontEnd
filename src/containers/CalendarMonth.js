import { connect } from "react-redux"
import CalendarMonth from "../components/Calendar/CalendarMonth";


const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = (dispatch) => ({
  // This function is passed to App component.
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarMonth);
