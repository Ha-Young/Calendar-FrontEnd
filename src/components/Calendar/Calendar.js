import React, { Fragment, useState } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Daily from "../../containers/Daily";
import Weekly from "../../containers/Weekly";

export default function Calendar() {
  const match = useRouteMatch();
  console.log(match.url);

  return (
    <Fragment>
      <nav>
        <ul className="menu">
          <li className="daily-menu">
            <Link to={`${match.url}/daily`}>일간 스케줄</Link>
          </li>
          <li className="weekly-menu">
            <Link to={`${match.url}/weekly`}>주간 스케줄</Link>
          </li>
        </ul>
      </nav>
      <Route exact path={`${match.url}/daily`}><Daily /></Route>
      <Route exact path={`${match.url}/weekly`}><Weekly /></Route>
    </Fragment>
  );
}

