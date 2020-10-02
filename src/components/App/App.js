import React, { useState, useEffect } from 'react';
import { Route, Switch, useParams } from 'react-router-dom';
import { connect } from 'react-redux';

//import { saveSampleData, setEventData } from '../../utils/api';
import firebaseAuth from '../../utils/firebase';
import 'firebase/auth';

import styles from './App.module.css';
import Header from '../Header/Header';
import DailyCalendar from "../DailyCalendar/DailyCalendar";
import WeeklyCalendar from "../WeeklyCalendar/WeeklyCalendar";
//import EventInfo from "../EventInfo/EventInfo";
import EventForm from "../EventForm/EventForm";
//import { ADD_EVENT, EDIT_EVENT, DELETE_EVENT } from "../../constants/actionTypes";
import { addEvent, editEvent, deleteEvent, moveDate } from "../../actions";
import Auth from '../../routes/Auth';
import { getDataFromDB, cancelOutReadEventData } from "../../utils/api";



function App({
  calendarMode,
  allDailyEvent,
  shownDate,
  addEvent,
  editEvent,
  deleteEvent,
  moveDate
}) {
  console.log("ALL DAILY EVENT", allDailyEvent);
  console.log("MOVEDATE", moveDate);
  console.log("SHOWN DATE", shownDate);

  useEffect(() => {
    getDataFromDB(addEvent, shownDate.date);

    return (
      cancelOutReadEventData(addEvent, shownDate.date)
    )
  }, [shownDate]);

  return (
    <div className={styles.App}>
      <Header
        shownDate={shownDate}
        calendarMode={calendarMode}
        clickButton={moveDate} />
      <Switch>
        <Route path='/' exact>
          <DailyCalendar
            shownDate={shownDate}
            allEvent={allDailyEvent}
            onTimeTableEntryClick={addEvent} />
        </Route>
        <Route path='/weekly-calendar'>
          <WeeklyCalendar />
        </Route>
        <Route path='/event'>
          <EventForm
            onAddEvent={addEvent} />
        </Route>
        <Route path='/auth'>
          <Auth />
        </Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    calendarMode: state.calendarModeReducer.calendarMode,
    allDailyEvent: state.dailyEventReducer,
    shownDate: state.updateDateReducer

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addEvent: (event) => dispatch(addEvent(event)),
    editEvent: () => dispatch(editEvent()),
    deleteEvent: () => dispatch(deleteEvent()),
    moveDate: (event) => dispatch(moveDate(event))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);




  //const auth = firebaseAuth.auth();
  //console.log(auth.currentUser);

  // useEffect(() => {
  //   const data = setEventData(addEvent());
  //   console.log(data);
  // }, [addEvent]);

  // const [isLogIn, setISLogIn] = useState(auth.currentUser);
  // console.log("Login", isLogIn);

  // useEffect({


  // }, [isLogIn]);