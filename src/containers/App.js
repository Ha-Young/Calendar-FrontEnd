import { connect } from "react-redux";
import App from "../components/App/App";
import { saveSampleData } from "../api";
import "../css/reset.css";

const mapStateToProps = (state) => ({
  something: "Mapping redux state to App component props.",
});

const mapDispatchToProps = () => ({
  // This function is passed to App component.
  onInitialLoad: () => {
    saveSampleData();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
