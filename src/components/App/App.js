import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import GlobalStyles from "./GlobalStyles";
import AppHeader from "../Header/AppHeader";
import Weekly from "../Weekly/Weekly";
import Daily from "../Daily/Daily";
import Event from "../Event/index";

const App = ({
  onInitialLoad,
  setDaily,
  setWeekly,
  countOfDay,
  countOfWeek,
  onSubmit,
}) => {
  useEffect(() => {
    onInitialLoad();
  }, []);

  return (
    <>
      <GlobalStyles />
      <AppHeader />

      <Switch>
        <Route path="/" exact>
          <Daily count={countOfDay} onPage={setDaily} />
        </Route>
        <Route path="/weekly">
          <Weekly count={countOfWeek} onPage={setWeekly} />
        </Route>
        <Route path="/daily">
          <Daily count={countOfDay} onPage={setDaily} />
        </Route>
        <Route path="/Event/new">
          <Event onSubmit={onSubmit} />
        </Route>
      </Switch>
    </>
  );
};

export default App;
