import React, { useEffect } from "react";
import MainContainer from "./MainContainer";
import Sidebar from "../components/Sidebar/Sidebar";
import { RECEIVE_EVENTS } from "../actions/index";

import { connect } from "react-redux";
import { fetchData } from "../api";

import _ from "lodash";

const mapStateToProps = (state) => ({ app: state });

const mapDispatchToProps = (dispatch) => ({
  onInitialLoad: async () => {
    console.log("loaded!!!!!");
    const fetchedEvent = await fetchData();
    console.log(fetchedEvent);
    const fetchedEvents = _.flatMapDeep(fetchedEvent, (n) => {
      return [n];
    });
    console.log(fetchedEvents);

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
