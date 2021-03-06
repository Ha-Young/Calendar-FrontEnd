import { connect } from "react-redux";
import App from "../components/App/App";
import { saveSampleData } from "../api";

const mapDispatchToProps = () => ({
  onInitialLoad: () => {
    saveSampleData();
  }
});

export default connect(null, mapDispatchToProps)(App);
