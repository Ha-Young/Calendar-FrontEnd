import React, { useEffect } from "react";
import { connect } from "react-redux";

import MainContainer from "containers/MainContainer";
import Sidebar from "components/Sidebar";

import PropTypes from "prop-types";
import * as actions from "actions";

const mapStateToProps = (state) => {
  return {
    currentTime: state.calendar.currentTime,
    events: state.calendar.events,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onInitialLoad: async () => {
    const fetchedEvents = await actions.fetchEvents();
    dispatch(fetchedEvents);
  },
});

const AppContainer = ({ onInitialLoad, currentTime, events }) => {
  useEffect(() => {
    onInitialLoad();
  }, [onInitialLoad]);
  return (
    <>
      <Sidebar currentTime={currentTime} events={events} />
      <MainContainer />
    </>
  );
};

AppContainer.propTypes = {
  onInitialLoad: PropTypes.func,
  currentTime: PropTypes.object,
  events: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
