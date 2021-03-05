import { connect } from "react-redux";
import Daily from "../components/Daily/Daily";

const mapStateToProps = state => ({
  event: state.eventsReducer
});

export default connect(mapStateToProps)(Daily);
