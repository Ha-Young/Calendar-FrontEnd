import { connect } from "react-redux";
import UpdateEvent from "../components/UpdateEvent/UpdateEvent";

const mapStateToProps = (state) => ({
  state
});

export default connect(mapStateToProps, null)(UpdateEvent);
