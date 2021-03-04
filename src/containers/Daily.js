import { connect } from "react-redux";
import Daily from "../components/Daily/Daily";

const mapStateToProps = (state) => {
  return {
    events: state.events,                                                                                                                           
  }
}


export default connect(mapStateToProps, null)(Daily);
