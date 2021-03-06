import React, { useEffect } from "react";

import MainContainer from "containers/MainContainer";
import Sidebar from "components/Sidebar";

import * as actionTypes from "constants/actionTypes";
import { connect } from "react-redux";
import { fetchEvents } from "api";
import _ from "lodash";

const mapStateToProps = (state) => {
  return {
    currentTime: state.calendar.currentTime,
    events: state.calendar.events,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onInitialLoad: async () => {
    try {
      const fetchedEvent = await fetchEvents();
      const fetchedEvents = _.flatMapDeep(fetchedEvent, (n) => {
        return [n];
      });
      dispatch({ type: actionTypes.RECEIVE_EVENTS, payload: fetchedEvents });
    } catch (error) {
      const receivedErr = error;
      dispatch({ type: actionTypes.RECEIVE_ERROR, payload: receivedErr });
    }
  },
});

const AppContainer = ({ onInitialLoad, currentTime, events }) => {
  useEffect(() => {
    onInitialLoad();
  }, []);
  return (
    <>
      <Sidebar currentTime={currentTime} events={events} />
      <MainContainer />
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
