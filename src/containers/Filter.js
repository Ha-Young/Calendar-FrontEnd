import { connect } from "react-redux";
import Filter from "../components/Header/Nav/Filter";

const mapStateToProps = (state) => ({
  page: state.calendar.currentPage,
});

export default connect(mapStateToProps, null)(Filter);
