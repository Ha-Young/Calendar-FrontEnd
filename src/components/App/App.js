import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PropTypes from 'prop-types';

import styles from "./App.module.css";
import Calendar from "../Calendar/Calendar";
import Dashboard from "../Dashboard/Dashboard";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Events from "../Events/Events";
import NewEvent from "../Events/NewEvent";
import EventDetail from "../Events/EventDetail";
import Notification from "../Notification/Notification";

function App({ 
  events, 
  login,
  notification,
  fetchDailyEvent,
  removeEvents,
  toggleLogin,
  offNotification,
  writeUserDataToFirebase,
}) {
  const { userId, isLoggedIn } = login;
  const { haveNotification, message } = notification;

  return (
    <div className={styles.App}> 
      {haveNotification && 
        <Notification message={message} offNotification={offNotification} />}
      <ToastContainer />
      <Header />
      <Switch>
        <Route exact path="/calendar">
          <Dashboard
            main={<Calendar userId={userId} events={events} fetchDailyEvent={fetchDailyEvent} />}
            login={<Login onClickLogin={toggleLogin} isLoggedIn={isLoggedIn} />}
            events={<Events userId={userId} />}
          />
        </Route>
        <Route exact path="/event/new">
          <NewEvent userId={userId} writeUserDataToFirebase={writeUserDataToFirebase} />
        </Route>
        <Route exact path="/event/detail/:date/:hours">
          <EventDetail userId={userId} removeEvents={removeEvents} />
        </Route>
        <Route exact path="/event/edit/:date/:hours">
          <NewEvent userId={userId} writeUserDataToFirebase={writeUserDataToFirebase} /> 
        </Route>
        <Route path="*">
          <Redirect to="/calendar" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

App.propTypes = {
  events: PropTypes.object.isRequired,
  fetchDailyEvent: PropTypes.func.isRequired,
  removeEvents: PropTypes.func.isRequired,
  login: PropTypes.shape({
    userId: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
  }).isRequired,
  toggleLogin: PropTypes.func.isRequired,
  notification: PropTypes.shape({
    haveNotification: PropTypes.bool.isRequired,
    message: PropTypes.string,
  }).isRequired,
  offNotification: PropTypes.func.isRequired,
};
