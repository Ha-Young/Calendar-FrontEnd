import React from 'react';
// TODO: We are using CSS Modules here.
// Do your own research about CSS Modules.
// For example, what is it? what are benefits?
import EventContainer from 'containers/EventContainer';
import CalendarContainer from 'containers/CalendarContainer';
import Header from '../Header/Header';
import { database } from 'firebase';

export const App = () => {

  console.log(database);
  return (
    <>
      <Header />
      <CalendarContainer />
      <EventContainer />
    </>
  );
};
