import { connect } from "react-redux";
import Calendar from '../components/Calendar/Calendar';

const mapStateToProps = (state) => ({
  ...state
});

export default connect(mapStateToProps, null)(Calendar);