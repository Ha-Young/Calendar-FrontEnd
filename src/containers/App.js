import { connect } from "react-redux";
import App from "../components/App/App";

const mapStateToProps = (state) => ({
  something: "Mapping redux state to App component props.",
});

const mapDispatchToProps = (dispatch) => ({
  // This function is passed to App component.
  onInitialLoad: () => {
    
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
