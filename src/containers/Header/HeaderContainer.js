import { connect } from "react-redux";
import Header from "../../components/Header/Header";
import { getCurrentDate } from "../../utils/getDate";
import { getNextDate, getPrevDate } from "../../actions";

const mapStateToProps = (state) => {
  const currentDate = getCurrentDate(state.currentDay);

  return { currentDate };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlePrevButtonClick: () => dispatch(getPrevDate()),
    handleNextButtonClick: () => dispatch(getNextDate()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
