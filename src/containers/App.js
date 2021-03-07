import { connect } from "react-redux";
import App from "../components/App/App";
import { onInitialLoad } from "../actions";

export default connect(null, {onInitialLoad})(App);
