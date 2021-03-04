import React from "react";
import { Route, Switch } from "react-router-dom";
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import styles from "./App.module.css";
import Header from "../Header/Header";
import Daily from "../Daily/Daily";
import Weekly from "../Weekly/Weekly";
import EventForm from "../EventDetails/EventForm";
import Modal from "../shared/Modal";

function App(props) {

  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Daily />
        </Route>
        <Route path="/weekly">
          <Weekly />
        </Route>
        <Route path="/events/new">
        <Modal>
          <EventForm inputData={props.eventFormInfo} setEventForm={props.actToEventForm} setUserEvent={props.actToUserEvent}/>
        </Modal>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
