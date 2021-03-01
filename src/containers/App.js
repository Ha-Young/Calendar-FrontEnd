import { connect } from "react-redux";
import App from "../components/App/App";
import { saveSampleData, addfolder, updateSample, addSample } from "../api";

const mapStateToProps = (state) => ({
  something: "Mapping redux state to App component props.",
});

const mapDispatchToProps = () => ({
  // This function is passed to App component.
  onInitialLoad: () => {
    //saveSampleData();
    //updateSample();
    //addSample();
    //addfolder();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
