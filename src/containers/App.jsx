import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import AppRouter from "containers/AppRouter";
import Footer from "components/Footer/Footer";
import Loading from "components/Loading/Loading";

import { actionCreators } from "actions/actionCreators";
import { authService } from "api/firebaseService";
import { initializeApp } from "api/firebaseAPIs";

const App = ({ setInitialize }) => {
  const [ready, setReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        initializeApp((initialEvent) => {
          setInitialize(initialEvent, authService.currentUser.uid);
          setIsLoggedIn(true);
          setReady(true);
        });
      } else {
        setIsLoggedIn(false);
        setReady(true);
      }
    });
  }, [setInitialize]);

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

const mapDispatchToProps = (dispatch) => ({
  setInitialize: (initialEvent, userId) => {
    dispatch(actionCreators.setInitialize(initialEvent, userId));
  },
});

export default connect(null, mapDispatchToProps)(App);
