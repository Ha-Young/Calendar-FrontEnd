import React, { Fragment } from "react";
import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Daily from "../../containers/Daily";
import Weekly from "../../containers/Weekly";

export default function Calendar() {
  const match = useRouteMatch();
  return (
    <Fragment>
      <Router>
        <div>
          <nav>
            <ul className="menu">
              <li className="daily-menu"><Link to={`${match.url}/daily`}>일간 스케줄</Link></li>
              <li className="weekly-menu"><Link to={`${match.url}/weekly`}>주간 스케줄</Link></li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path={`${match.url}/daily`}><Daily /></Route>
          <Route path={`${match.url}/weekly`}><Weekly /></Route>
        </Switch>
      </Router>
    </Fragment>
  );
}
