import { connect } from "react-redux";
import SelectContainer from "../../components/EventPage/EventItem/SelectContainer";
import { selectTime } from "../../actions";

const mapStateToProps = ({ selectedTime }) => {
  return { selectedTime };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSelectedTime: (time) => dispatch(selectTime(time)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectContainer);
