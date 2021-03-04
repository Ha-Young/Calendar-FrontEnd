import { connect } from "react-redux";
import App from "../components/App/App";
import { onInitialLoad } from "../actions";

const mapStateToProps = (state) => ({
  something: "Mapping redux state to App component props.",
});

export default connect(mapStateToProps, {onInitialLoad})(App);
