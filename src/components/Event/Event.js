import React from "react";
import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Form from "../../containers/Form";

export default function Event() {
  const match = useRouteMatch();

  return (
    <Router>
      <div>
        <nav>
          <li><Link to={`${match.url}/new`}>이벤트 추가</Link></li>
        </nav>
      </div>
      <Switch>
        <Route path={`${match.url}/new`}><Form /></Route>
      </Switch>
    </Router>
  );
}
