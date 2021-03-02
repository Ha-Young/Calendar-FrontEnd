import { connect } from "react-redux";
import App from "../components/App/App";
import { saveSampleData } from "../api";

const mapStateToProps = (state) => ({
  something: "Mapping redux state to App component props.",
});

const mapDispatchToProps = (dispatch) => ({
  // This function is passed to App component.
  onInitialLoad: () => {
    saveSampleData();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
