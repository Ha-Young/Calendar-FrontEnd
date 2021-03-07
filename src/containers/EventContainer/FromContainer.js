import { connect } from "react-redux";
import Form from "../../components/EventPage/EventItem/Form";
import { addEvent } from "../../actions";

const mapStateToProps = ({ period ,currentDay }) => {
  return { period, currentDay };
};

const  mapDispatchToProps = (dispatch) => {
  return {
    dispatchAddEvent: (event) => dispatch(addEvent(event)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
