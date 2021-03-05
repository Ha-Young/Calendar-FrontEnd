import { connect } from "react-redux";
import App from "../components/App/App";
import { saveSampleData } from "../api";


// state의 어떤 이름을 가진 녀석을 something으로 받을 수 있도록 조치해주는 듯???

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
