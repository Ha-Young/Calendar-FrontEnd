import styles from "./AppRouter.module.css";
import Header from "components/Header/Header";
import Home from "components/Home/Home";
import Daily from "containers/Daily";
import Weekly from "containers/Weekly";
import NewEvent from "components/NewEvent/NewEvent";
import EventDetail from "components/EventDetail/EventDetail";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "components/Login/Login";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Switch>
      <>
        {isLoggedIn ? (
          <div className={styles.App}>
            <Header />
            <Route exact path="/" component={NewEvent} />
            <Route exact path="/daily" component={Daily} />
            <Route exact path="/weekly" component={Weekly} />
            <Route exact path="/events/:eventId" component={EventDetail} />
            <Route exact path="/events/new" component={NewEvent} />
            <Redirect from="/calender" to="/" />
          </div>
        ) : (
          <Route exact path="/">
            <Login />
          </Route>
        )}
      </>
    </Switch>
  );
};

export default AppRouter;
