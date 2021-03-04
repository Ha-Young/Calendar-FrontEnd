import React from "react";
import { connect } from "react-redux";
import Modal from "../components/Modal/Modal";

const mapStateToProps = (state) => {
  return {
    events: state.eventList,
    selected: state.selectedEvent.key,
  }
}

export default connect(mapStateToProps, )(Modal);
