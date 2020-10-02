import React from "react";
import { connect } from "react-redux";
import { addNewEvent } from "../actions/index";

function MainContainer ({
  eventTitle,
  eventDesc,
  startDay,
  startTime,
  endDay,
  endTime,
}) {
  return (
    <Switch>
      <Route path="/" exact>
        <Daily
          times={times}
          openEvent={clickToOpenModal}
          isModalOpen={isModalOpen}
          eventArea={differenceHour}
          eventInfo={inputValue}
        />
      </Route>
      <Route path="/weekly">
        <Weekly
          times={times}
          openEvent={clickToOpenModal}
          isModalOpen={isModalOpen}
          eventArea={differenceHour}
          eventInfo={inputValue}
        />
      </Route>
    </Switch>
  );
}

const mapStateToProps = state => {
  return {
    eventTitle: state.eventInfo.text,
    eventDesc: state.eventInfo.text,
    startDay: state.eventInfo.text,
    startTime: state.eventInfo.text,
    endDay: state.eventInfo.text,
    endTime: state.eventInfo.text,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewEvent: () => dispatch(addNewEvent()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
