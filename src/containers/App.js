import { connect } from "react-redux";
import App from "../components/App/App";
import { init } from "../api";

const mapDispatchToProps = (dispatch) => {
  init(dispatch);

  return {};
};

export default connect(null, mapDispatchToProps)(App);
