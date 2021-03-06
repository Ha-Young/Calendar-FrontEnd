import { connect } from "react-redux";
import Form from "../../components/EventPage/EventItem/Form";
import { addEvent } from "../../actions";

const mapStateToProps = ({ currentDay }) => {
  return { currentDay };
};

const  mapDispatchToProps = (dispatch) => {
  return {
    dispatchedAddEvent: (event) => dispatch(addEvent(event)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
