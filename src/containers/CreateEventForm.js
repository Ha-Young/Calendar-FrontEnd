import { connect } from "react-redux";
import Form from "../components/Form/Form";
import { createEvent } from "../actions";

const mapDispatchToProps = (dispatch) => ({
  // This function is passed to App component.
  onSubmit: (event) => {
    dispatch(createEvent(event));
  },
});

export default connect(null, mapDispatchToProps)(Form);
