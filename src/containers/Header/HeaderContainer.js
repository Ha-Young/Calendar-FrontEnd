import { connect } from "react-redux";
import Header from "../../components/Header/Header";
import { getCurrentDate } from "../../utils/getDate";
import { nextDate, prevDate } from "../../actions";

const mapStateToProps = (state) => {
  const currentDate = getCurrentDate(state.currentDay);

  return { currentDate };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPrevButtonClick: () => dispatch(prevDate()),
    onNextButtonClick: () => dispatch(nextDate()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
