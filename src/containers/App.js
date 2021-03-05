import { connect } from "react-redux";
import App from "../components/App/App.jsx";
import { init } from "../api";
import { initEvent } from "../actions";

const mapStateToProps = (state) => ({
  foo: "foo",
});

const mapDispatchToProps = (dispatch) => ({
  onInitialLoad: () => {
    init((events) => dispatch(initEvent(events)));
  },
});

export default connect(null, mapDispatchToProps)(App);
