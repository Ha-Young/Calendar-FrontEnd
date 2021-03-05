import { connect } from "react-redux";
import App from "../components/App/App";

const mapStateToProps = (state) => ({
  currentDay: state.currentDay,
  events: state.events,
});

export default connect(mapStateToProps, null)(App);
