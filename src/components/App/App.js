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
import FlexColumnBox from "../../shared/FlexColumnBox";

const App = ({
  onInitialLoad,
  setDaily,
  setWeekly,
  countOfDay,
  countOfWeek,
  onSubmit,
  setEvent,
  events,
}) => {
  useEffect(() => {
    onInitialLoad();
  }, []);

  return (
    <FlexColumnBox>
      <GlobalStyles />
      <AppHeader />

      <Switch>
        <Route path="/" exact>
          <Daily count={countOfDay} onPage={setDaily} events={events} />
        </Route>
        <Route path="/Day">
          <Daily count={countOfDay} onPage={setDaily} events={events} />
        </Route>
        <Route path="/Week">
          <Weekly count={countOfWeek} onPage={setWeekly} events={events} />
        </Route>
        <Route path="/Event/new">
          <Event onSubmit={onSubmit} onPage={setEvent}/>
        </Route>
      </Switch>
    </FlexColumnBox>
  );
};

export default App;
