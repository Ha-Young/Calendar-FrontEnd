import { connect } from "react-redux";
import Weekly from "../components/Weekly/Weekly";

const mapStateToProps = (state) => {
  return {
    events: state.events,                                                                                                                           
  }
}


export default connect(mapStateToProps, null)(Weekly);
