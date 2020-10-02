import React from 'react';
import CalendarContainer from 'containers/CalendarContainer';
import EventContainer from 'containers/EventContainer';
import Header from 'components/Header/Header';
import styles from './App.module.css';

export const App = ({ onCalendarTypeChange }) => {
  return (
    <>
      <Header onCalendarTypeChange={onCalendarTypeChange} />
      <CalendarContainer />
      <EventContainer />
    </>
  );
};
