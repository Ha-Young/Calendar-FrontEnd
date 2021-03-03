import { connect } from "react-redux";

import Weekly from "../components/Weekly/Weekly";

const mapStateToProps = (state) => ({
  date: state.date,
});

export default connect(mapStateToProps, null)(Weekly);
