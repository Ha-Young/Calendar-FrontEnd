import { connect } from "react-redux";
import Selector from "../../components/EventPage/EventItem/Selector";
import { selectTime } from "../../actions";

const mapStateToProps = ({ selectedTime }) => {
  return { selectedTime };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSelectedTime: (time) => dispatch(selectTime(time)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Selector);
