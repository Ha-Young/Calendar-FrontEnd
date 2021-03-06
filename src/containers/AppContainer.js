import React, { useEffect } from "react";

import MainContainer from "containers/MainContainer";
import Sidebar from "components/Sidebar";

import { RECEIVE_EVENTS } from "actions";
import { connect } from "react-redux";
import { fetchData } from "api";
import _ from "lodash";

const mapStateToProps = (state) => ({ app: state });

const mapDispatchToProps = (dispatch) => ({
  onInitialLoad: async () => {
    const fetchedEvent = await fetchData();
    const fetchedEvents = _.flatMapDeep(fetchedEvent, (n) => {
      return [n];
    });

    dispatch({ type: RECEIVE_EVENTS, payload: fetchedEvents });
  },
});

const AppContainer = ({ onInitialLoad }) => {
  useEffect(() => {
    onInitialLoad();
  }, []);
  return (
    <>
      <Sidebar />
      <MainContainer />
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
