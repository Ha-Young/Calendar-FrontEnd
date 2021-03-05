import React, { Fragment } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Daily from "../../containers/Daily";
import Weekly from "../../containers/Weekly";

export default function Calendar() {
  return (
    <Fragment>
        {/* <div> */}
          {/* <nav>
            <ul className="menu">
              <li className="daily-menu"><Link to="/daily">일간 스케줄</Link></li>
              <li className="weekly-menu"><Link to="/weekly">주간 스케줄</Link></li>
            </ul>
          </nav> */}
        {/* <Route exact path="/calendar" component

        <Switch>
          <Route path="/daily"><Daily /></Route>
          <Route path="/weekly"><Weekly /></Route>
        </Switch>
      </Router> */}
    </Fragment>
  );
}
