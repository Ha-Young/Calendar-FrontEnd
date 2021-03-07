import { connect } from "react-redux";
import Daily from "../components/Daily/Daily";

const mapStateToProps = (state) => ({
  events: state.eventsReducer
});

export default connect(mapStateToProps)(Daily);
