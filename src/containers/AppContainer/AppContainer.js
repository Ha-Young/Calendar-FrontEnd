import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./AppContainer.module.css";
import Header from "../../components/AppHeader/AppHeader";
import { saveSampleData } from "../../utils/api";
import Calendar from "../../components/Calendar/Calendar";
import * as dayjs from "dayjs";
import { connect } from "react-redux";

// Feel free to modify as you need.
function AppContainer() {
  useEffect(() => {
    saveSampleData();
  }, []);

  console.log(dayjs().format());

  return (
    <div className={styles.AppContainer}>
      <Header />
      <Switch>
        <Route path="/calendar" exact>
          <div>Main</div>
        </Route>
      </Switch>
      <Calendar />
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(null, mapDispatchToProps)(AppContainer);
