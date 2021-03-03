import { connect } from "react-redux";
import CreateEvent from "../components/CreateEvent/CreateEvent";
import { loadToday } from "../actions";

const mapStateToProps = (state) => ({
  state
});

export default connect(mapStateToProps, null)(CreateEvent);
