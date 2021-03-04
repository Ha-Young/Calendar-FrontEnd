import { connect } from "react-redux";
import App from "../components/App/App";
import { saveData } from "../api";

const mapStateToProps = (state) => ({
  something: "Mapping redux state to App component props.",
});

const mapDispatchToProps = () => ({

  onInitialLoad: () => {
    saveData();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
