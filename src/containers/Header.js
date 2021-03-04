import { connect } from "react-redux";

import { moveToToday, toggleDay } from "../actions";
import Header from "../components/Header/Header.jsx";

const mapStateToProps = (state) => ({
  isDaily: state.isDaily,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDay: () => dispatch(toggleDay()),
  moveToToday: () => dispatch(moveToToday()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
