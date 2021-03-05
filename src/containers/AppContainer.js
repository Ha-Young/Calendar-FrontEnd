import React, { useEffect } from "react";
import MainContainer from "./MainContainer";
import Sidebar from "../components/Sidebar/Sidebar";

import { connect } from "react-redux";
import { saveSampleData } from "../api";
import { receiveEvents } from "../actions/index";

const mapStateToProps = (state) => ({ app: state });

const mapDispatchToProps = (dispatch) => ({
  // This function is passed to App component.

  onInitialLoad: () => {
    saveSampleData();
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
