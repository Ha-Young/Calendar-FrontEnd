import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



function NewEventContainer({ onSubmit, events }) {
  useEffect(() => {
    console.log(events);
  }, [events]);

  function submitEventData(e) {
    e.preventDefault();
    const newEvent = [...e.target].map((target) => target.value);
    newEvent.pop();
    onSubmit(newEvent);
  }

  return (
    <>
      <Link to='/calendar'>Back</Link>
      <form onSubmit={submitEventData} method="get">
        <div>
          <label htmlFor='title'>Title:</label>
          <input type='text' id='title' />
        </div>
        <div>
          <label htmlFor='description'>Description:</label>
          <input type='text' id='description'/>
        </div>
        <div>
          <label htmlFor='date'>Date:</label>
          <input type='date' id='date'/>
        </div>
        <div>
          <label htmlFor='start-time'>Start:</label>
          <input type='time' id='start-time' step={3600} />
        </div>
        <div>
          <label htmlFor='end-time'>End:</label>
          <input type='time' id='end-time' step={3600} />
        </div>
        <input type='submit' value='create event' />
      </form>
    </>
  );
}

const makeEventObject = (event) => {
  const eventProps = ['id', 'title', 'description', 'date', 'startTime', 'endTime'];
  let eventObj = eventProps.reduce((obj, key, index) => {
    if (key === 'id') {
      obj[key] = 'event_' + Math.random().toString(36).substring(2);
      return obj;
    }
    if (!event[index - 1]) {
      obj[key] = null;
      return obj;
    }
    obj[key] = event[index - 1];
    return obj;
  }, {});

  return eventObj;
};

const mapStateToProps = (state) => {
  return {
    events: state.events
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit(newEvent) {
      dispatch({ type: 'ADD_EVENT', events: makeEventObject(newEvent) });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewEventContainer);