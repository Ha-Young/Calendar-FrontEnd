import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import AppRouter from "containers/AppRouter";
import Footer from "components/Footer/Footer";
import Loading from "components/Loading/Loading";
import { authService } from "api/firebaseService";
import { initializeApp } from "api/firebaseAPIs";
import { actionCreators } from "actions/actionCreators";

const App = ({ onLoggedIn }) => {
  const [ready, setReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        initializeApp((initialEvent) => {
          onLoggedIn(initialEvent, authService.currentUser.uid);
          setIsLoggedIn(true);
          setReady(true);
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
  onLoggedIn: (initialEvent, userId) => {
    dispatch(actionCreators.setInitialize(initialEvent, userId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
