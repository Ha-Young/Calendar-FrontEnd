import { connect } from "react-redux";
import { toggleDay } from "../actions";
import Header from "../components/Header/Header";

const mapStateToProps = (state) => ({
  isDaily: state.isDaily,
});

const mapDispatchToProps = (dispatch) => ({
  toggleDay: () => dispatch(toggleDay()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
