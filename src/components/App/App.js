import React from 'react';
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import EventContainer from 'containers/EventContainer';
import CalendarContainer from 'containers/CalendarContainer';
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
