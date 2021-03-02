import { connect } from "react-redux";
import App from "../components/App/App";
import { getUserData, writeUserData } from "../api";

const mapStateToProps = (state) => ({
  something: "Mapping redux state to App component props.",
});

const mapDispatchToProps = () => ({
  // This function is passed to App component.
  writeUserData: writeUserData,
  getUserData: getUserData,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
