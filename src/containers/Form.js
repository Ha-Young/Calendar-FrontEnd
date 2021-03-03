import { connect } from "react-redux";
import { saveNewRecord } from "../api";
import Form from "../components/Form/Form";

const mapDispatchToProps = (dispatch) => {
  return {
    onEventSubmit: (content) => {
      dispatch({
        type: "SAVE_RECORD",
        content: content,
      });
      saveNewRecord(content);
    },
  }
}

export default connect(null, mapDispatchToProps)(Form);
