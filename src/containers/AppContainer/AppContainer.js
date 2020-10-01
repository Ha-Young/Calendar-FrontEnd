import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./AppContainer.module.css";
import AppHeader from "../../components/AppHeader/AppHeader";
import { saveSampleData, saveNewEvent } from "../../utils/api";
import Calendar from "../../components/Calendar/Calendar";
import * as dayjs from "dayjs";
import { connect } from "react-redux";
import { showDaily, showWeekly, login, logout } from "../../actions";
import Form from "../../components/Form/Form";
import firebase, { auth, provider } from "../../utils/firebase";
import Auth from "../../Auth/Auth";

// Feel free to modify as you need.
function AppContainer({
  // onLoad,
  showDaily,
  showWeekly,
  viewMode,
  onLogin,
  onLogout,
  isLoggedIn,
}) {
  // useEffect(() => {
  //   const starCountRef = firebase.database().ref(`users/${userId}`);
  //   starCountRef.on('value', function(snapshot) {
  //     updateStarCount(postElement, snapshot.val());
  //   });
  // }, []);

  console.log(auth.currentUser);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) return onLogin();
      return onLogout();
    });
  }, [auth.currentUser]);

  function onGoogleLoginClick() {
    auth.signInWithPopup(provider);
  }

  function logout() {
    auth.signOut();
  }

  return (
    <div className={styles.AppContainer}>
      {
        isLoggedIn
        && <>
          <AppHeader
            showDaily={showDaily}
            showWeekly={showWeekly}
          />
          <Switch>
            <Route path="/" exact>
              <Calendar
                viewMode={viewMode}
              />
            </Route>
            <Route path="/events/new">
              <Form submitHandler="" value="일정 더하기">
                <input type="text" name="title" placeholder="할 일" autocomplete="off" />
                <input type="text" name="description" placeholder="설명" autocomplete="off" />
                <input type="date" name="date" />
                <input type="time" name="start" />
                <input type="time" name="finish" />
              </Form>
            </Route>
          </Switch>
          <button onClick={logout}>나가기</button>
        </>
      }
      {
        !isLoggedIn && <Auth onClick={onGoogleLoginClick} />
      }

    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    showDaily() {
      dispatch(showDaily());
    },
    showWeekly() {
      dispatch(showWeekly());
    },
    onLogin() {
      dispatch(login());
    },
    onLogout() {
      dispatch(logout());
    },
  };
};

const mapStateToProps = state => {
  console.log(state);
  return {
    viewMode: state.viewMode,
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
