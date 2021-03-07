import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import GlobalStyles from "./GlobalStyles";
import AppHeader from "../Header/AppHeader";
import Weekly from "../Weekly/Weekly";
import Daily from "../Daily/Daily";
import Event from "../Event/index";
import EventInfo from "../Event/EventInfo";
import FlexColumnBox from "../../shared/FlexColumnBox";

const App = ({
  onInitialLoad,
  setDaily,
  setWeekly,
  countOfDay,
  countOfWeek,
  onSubmit,
  setEvent,
  deleteEvent,
  events,
  sendEventToFirebase,
  showFirebaseData,
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
          <Event onSubmit={onSubmit} onPage={setEvent} onSendToFirebase={sendEventToFirebase} showFirebaseData={showFirebaseData} />
        </Route>
        <Route path="/Event/:day" children={<EventInfo events={events} deleteEvent={deleteEvent} />} />
      </Switch>
    </FlexColumnBox>
  );
};

export default App;

App.propTypes = {
  onInitialLoad: PropTypes.func.isRequired,
  setDaily: PropTypes.func.isRequired,
  setWeekly: PropTypes.func.isRequired,
  countOfDay: PropTypes.number.isRequired,
  countOfWeek: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setEvent: PropTypes.func.isRequired,
  deleteEvent: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired,
  sendEventToFirebase: PropTypes.func.isRequired,
  showFirebaseData: PropTypes.func.isRequired,
};
