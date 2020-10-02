import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { getEvents } from 'action/action';
import EventDetails from 'components/EventDetail/EventDetail';
import EventMaker from 'components/EventMaker/EventMaker';
import { getData } from 'utils/api';

export const EventCantainer = ({
  user,
  events,
  getEvents
}) => {
  const [isSubmitEvent, setIsSubmitEvent] = useState(false);

  useEffect(() => {
    if (!isSubmitEvent) return;

    try {
      getData(user, getEvents, setIsSubmitEvent);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsSubmitEvent(false);
    }
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
