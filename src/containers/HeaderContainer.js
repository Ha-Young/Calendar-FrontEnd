import { connect } from "react-redux";
import Header from "../components/Header/Header";
import { changeCalendarType } from "../actions/index";

const mapDispatchToProps = (dispatch) => ({
  onClickButton(info) {
    dispatch(changeCalendarType(info));
  },
});

export default connect(mapDispatchToProps, mapDispatchToProps)(Header);
