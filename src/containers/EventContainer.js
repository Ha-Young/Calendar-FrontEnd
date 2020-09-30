import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addEvent } from 'action/action';
import EventDetail from 'components/EventDetail/EventDetail';
import { Route } from 'react-router-dom';
import EventMaker from 'components/EventMaker/EventMaker';
import { saveData } from 'utils/api';

export const EventCantainer = ({ user, newEvent, setEvent }) => {
  useEffect(() => {
    if (newEvent) {
      console.log(newEvent);
      saveData({user, ...newEvent});
    }
  }, [newEvent]);//event to firebase

  return (
    <>
      <Route path='/events/new'>
        <EventMaker user={user} eventSubmit={setEvent} />
      </Route>
      <Route path='/events/:eventId'>
        <EventDetail events={newEvent} />
      </Route>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    newEvent: state.events
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setEvent: event => { dispatch(addEvent(event)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventCantainer);
