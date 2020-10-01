import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getEvents } from 'action/action';
import EventDetails from 'components/EventDetail/EventDetail';
import { Route } from 'react-router-dom';
import EventMaker from 'components/EventMaker/EventMaker';
import { getData } from 'utils/api';

export const EventCantainer = ({ user, events, getEvents }) => {
  const [isSubmitEvent, setIsSubmitEvent] = useState(false);

  useEffect(() => {
    if (!isSubmitEvent) return;
    console.log(events);
    getData(user, getEvents, setIsSubmitEvent);
    setIsSubmitEvent(false);
  }, [isSubmitEvent]);

  return (
    <>
      <Route path='/events/new'>
        <EventMaker isSubmit={setIsSubmitEvent} />
      </Route>
        <EventDetails events={events} />
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    events: state.events
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getEvents: events => { dispatch(getEvents(events)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventCantainer);
