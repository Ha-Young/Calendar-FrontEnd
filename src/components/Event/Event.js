import React from "react";
import { BrowserRouter as Router, HashRouter, Link, Route, Switch } from "react-router-dom";
import Form from "../../containers/Form";

export default function Event() {
  return (
    <div>
      <nav>
        <Route path="/new" component={Form}/>
      </nav>
    </div>
  );
}
