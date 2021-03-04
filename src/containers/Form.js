import { connect } from "react-redux";
import Form from "../components/Form/Form";
import { submitData } from "../actions";

const mapStateToProps = (state) => {
  return {
    events: state.eventList,
  }
}


export default connect(null, { submitData })(Form);
