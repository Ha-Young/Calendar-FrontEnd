import { connect } from "react-redux";
import Daily from "../components/Daily/Daily";

const mapStateToProps = (state) => ({
  currentDay: state.currentDay,
  events: state.events,
});

export default connect(mapStateToProps, null)(Daily);
