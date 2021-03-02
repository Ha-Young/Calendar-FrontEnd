import { connect } from "react-redux";
import { toggleDay } from "../actions";
import Header from "../components/Header/Header";

const mapStateToProps = (state) => ({
  isDay: state.isDay,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDay: () => dispatch(toggleDay()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
