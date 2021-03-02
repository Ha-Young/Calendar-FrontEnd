import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Form from "../Form/Form";

export default function Event() {
  return (
    <Router>
      <div>
        <nav>
          <li><Link to="/new">이벤트 추가</Link></li>
        </nav>
      </div>

      <Switch>
        <Route path="/new"><Form /></Route>
      </Switch>
    </Router>
  );
}
