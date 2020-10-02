import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import 'firebase/auth';

import Header from '../../components/Header/Header';
import DailyCalendar from "../../components/DailyCalendar/DailyCalendar";
import EventForm from "../../components/EventForm/EventForm";

import { addEvent, moveDate } from "../../actions";
import { getDataFromDB, cancelOutReadEventData } from "../../utils/api";

import styles from './AppContainer.module.css';


function AppContainer({
  calendarMode,
  allDailyEvent,
  shownDate,
  addEvent,
  moveDate
}) {
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
        <Route path='/event'>
          <EventForm
            onAddEvent={addEvent} />
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
    moveDate: (event) => dispatch(moveDate(event))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
