import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import AppRouter from "containers/AppRouter";
import Footer from "components/Footer/Footer";
import Loading from "components/Loading/Loading";
import { authService } from "api/firebaseService";
import { initializeApp } from "api";
import { actionCreators } from "actions";
import { getThisWeek } from "utils/utilFunction";

const App = ({ onLoggedIn, state }) => {
  const [ready, setReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        initializeApp((dailyEvent) => {
          onLoggedIn(dailyEvent, true);
          setIsLoggedIn(true);
          setReady(true);
          getThisWeek();
        });
      } else {
        setIsLoggedIn(false);
        setReady(true);
      }
    });
  }, [onLoggedIn]);

  return (
    <>
      {ready ? (
        <>
          <AppRouter isLoggedIn={isLoggedIn} />
          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  onLoggedIn: (dailyEvent, userState) => {
    dispatch(actionCreators.setInitialize(dailyEvent, userState));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
