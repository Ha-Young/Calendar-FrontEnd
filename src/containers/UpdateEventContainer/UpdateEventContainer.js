import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import { getEventById } from '../../reducers';

import { updateEvent, deleteEvent } from '../../utils/api';

function UpdateEventContainer({ getState, onSubmit, onDelete }) {
  const [inputValue, setInput] = useState({
    id: '',
    date: '',
    startTime: '',
    endTime: '',
    title: '',
    description: ''
  });
  const { params } = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    const targetEvent = getState(params.eventId);
    if (targetEvent) setInput(targetEvent);
  }, []);

  function handleSubmit() {
    if (inputValue.endTime === "00:00") {
      inputValue.endTime = "24:00";
    }
    onSubmit(inputValue);
    history.push('/calendar');
  }

  function handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setInput({ ...inputValue, [name] : value });
  }

  function handleClick() {
    onDelete(params.eventId);
    history.push("/calendar");
  }

  return (
    <>
      <Link to='/calendar'>Back</Link>
      <form onSubmit={handleSubmit}>
        <label>
          Title: <input name='title' type='text' value={inputValue.title} onChange={handleChange} />
        </label>
        <label>
          Description: <input name='description' type='text' value={inputValue.description} onChange={handleChange} />
        </label>
        <label>
          Date: <input name='date' type='date' value={inputValue.date} onChange={handleChange} />
        </label>
        <label>
          Start: <input name='startTime' type='time' value={inputValue.startTime} onChange={handleChange} step={3600} />
        </label>
        <label>
          End: <input name='endTime' type='time' value={inputValue.endTime} onChange={handleChange} step={3600} />
        </label>
        <input type='submit' value='Update' />
      </form>
      <button onClick={handleClick}>Delete</button>
    </>
  );
}

// const updateEvent = (event) => {
//   return { type: 'UPDATE_EVENT', events: { [event.id] : event } };
// };

// Redux Subscription

const mapStateToProps = (state) => {
  return {
    getState(id) {
      return getEventById(state.events, id);
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit(event) {
      updateEvent(event, dispatch);
      // dispatch(updateEvent(event));
    },
    onDelete(id) {
      deleteEvent(id, dispatch);
      // dispatch({ type: 'DELETE_EVENT', events: id });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEventContainer);
