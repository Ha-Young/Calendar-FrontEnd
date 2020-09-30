import React from "react";
import { connect } from "react-redux";
import NewEvent from "../components/NewEvent/NewEvent";
import { addEvent } from "../actions/actionCreators";

function EventContainer ({ addEvent }) {
  return (
    <>
      <NewEvent addEvent={ addEvent } />
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addEvent: (inputs) => dispatch(addEvent(inputs)),
  };
};

export default connect(null, mapDispatchToProps) (EventContainer);
