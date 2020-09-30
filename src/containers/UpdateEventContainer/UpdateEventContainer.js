import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { getEventById } from '../../reducers';

function UpdateEventContainer({ getEvent, onSubmit }) {
  const [input, setInput] = useState({
    id: '',
    date: '',
    startTime: '',
    endTime: '',
    title: '',
    description: ''
  });
  const { params } = useRouteMatch();

  useEffect(() => {
    const targetEvent = getEvent(params.eventId);
    if (targetEvent) setInput(targetEvent);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    onSubmit(input);
  }

  function handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setInput({ ...input, [name] : value });
  }

  return (
    <>
      <Link to='/calendar'>Back</Link>
      <form onSubmit={handleSubmit}>
        <label>
          Title: <input name='title' type='text' value={input.title} onChange={handleChange} />
        </label>
        <label>
          Description: <input name='description' type='text' value={input.description} onChange={handleChange} />
        </label>
        <label>
          Date: <input name='date' type='date' value={input.date} onChange={handleChange} />
        </label>
        <label>
          Start: <input name='startTime' type='time' value={input.startTime} onChange={handleChange} step={3600} />
        </label>
        <label>
          End: <input name='endTime' type='time' value={input.endTime} onChange={handleChange} step={3600} />
        </label>
        <input type='submit' value='Update' />
      </form>
      <button onClick={() => {}}>Delete</button>
    </>
  );
}

const updateEvent = (event) => {
  return { type: 'UPDATE_EVENT', events: { [event.id] : event } };
};

// Redux Subscription

const mapStateToProps = (state) => {
  return {
    getEvent(id) {
      return getEventById(state.events, id);
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit(event) {
      dispatch(updateEvent(event));
    },
    onDelete(id) {

    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEventContainer);