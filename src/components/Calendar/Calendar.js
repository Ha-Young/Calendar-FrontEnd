import React, { Fragment } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Daily from "../../containers/Daily";
import Weekly from "../../containers/Weekly";

export default function Calendar() {
  return (
    <Fragment>
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/daily">일간 스케줄</Link></li>
              <li><Link to="/weekly">주간 스케줄</Link></li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path="/daily"><Daily /></Route>
          <Route path="/weekly"><Weekly /></Route>
        </Switch>
      </Router>
    </Fragment>
  );
}
