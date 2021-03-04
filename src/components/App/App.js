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

const userEventsMock = [
  {
    content: "테스트1",
    id: "event1614834045661",
    period: {
      from: "2015-06-20T01:00:00.000Z",
      to: "2015-06-20T02:00:00.000Z",
    },
    timeStamp: 1614834045661,
    title: "테스트1",
  },
  {
    content: "테스트2",
    id: "event1614834045680",
    period: {
      from: "2015-06-20T03:00:00.000Z",
      to: "2015-06-20T04:00:00.000Z",
    },
    timeStamp: 1614834045680,
    title: "테스트2",
  },
  {
    content: "테스트3",
    id: "event1614834045690",
    period: {
      from: "2015-06-20T04:00:00.000Z",
      to: "2015-06-20T06:00:00.000Z",
    },
    timeStamp: 1614834045690,
    title: "테스트3",
  }
];

function App(props) {

  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Daily eventDate={props.currentDate} userEvents={props.dailyEvents} />
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
