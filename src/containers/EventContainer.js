import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getEvents } from 'action/action';
import EventDetail from 'components/EventDetail/EventDetail';
import { Route } from 'react-router-dom';
import EventMaker from 'components/EventMaker/EventMaker';
import { saveData } from 'utils/api';
import {getData} from 'utils/api';

export const EventCantainer = ({ user, events, getEvents }) => {
  const [isSubmitEvent, setIsSubmitEvent] = useState(false);

  useEffect(() => {
    if (!isSubmitEvent) return;
    
    getData(user, getEvents);
    setIsSubmitEvent(false);
  }, [isSubmitEvent]);

  return (
    <>
      <Route path='/events/new'>
        <EventMaker isSubmit={setIsSubmitEvent} />
      </Route>
      <Route path='/events/:eventId'>
        <EventDetail events={events} />
      </Route>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    events: state.events
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEvents: events => { dispatch(getEvents(events)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventCantainer);
