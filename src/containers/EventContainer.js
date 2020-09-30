import React from "react";
import { connect } from "react-redux";
import NewEvent from "../components/NewEvent/NewEvent";
import { addEvent } from "../actions/actionCreators";
import { pushData } from "../utils/api";

function EventContainer ({ addEvent }) {
  return (
    <>
      <NewEvent addEvent={ addEvent } />
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addEvent: async (eventDetails) => {
      // isLoading 처리해줘도 좋음!
      try {
        await pushData(eventDetails);
        dispatch(addEvent(eventDetails));
      } catch (error) {
        console.log(error);
      }
    }
  };
};

export default connect(null, mapDispatchToProps) (EventContainer);
