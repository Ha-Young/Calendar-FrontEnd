import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styles from "./App.module.css";
import Header from "../Header";
import Main from "../Main"


function App({ onInitialLoad }) {
  useEffect(() => {
    onInitialLoad();
  }, []);

  return (
    <div className={styles.App}>

      <Switch>
        <Route path="/calender" exact>
          <Header />
            <Main />
        </Route>

        <Route path="/events/new">
          <div>Event new form</div> 
        </Route>

        <Route path="/events/:id">
          <div>event edit page</div>
        </Route>

        <Redirect path="/" to="/calender" />
      </Switch>
    </div>
  );
}

export default App;
