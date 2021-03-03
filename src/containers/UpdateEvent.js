import { connect } from "react-redux";
import UpdateEvent from "../components/UpdateEvent/UpdateEvent";
import { loadToday } from "../actions";

const mapStateToProps = (state) => ({
  state
});

export default connect(mapStateToProps, null)(UpdateEvent);
