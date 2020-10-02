import React from 'react';
import CalendarContainer from 'containers/CalendarContainer';
import EventContainer from 'containers/EventContainer';
import Header from 'components/Header/Header';

export const App = ({onCalendarTypeChange}) => {
  return (
    <>
      <Header onCalendarTypeChange={onCalendarTypeChange} />
      <CalendarContainer />
      <EventContainer />
    </>
  );
};
