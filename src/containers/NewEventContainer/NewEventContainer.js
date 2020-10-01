import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { writeEvent } from '../../utils/api';

function NewEventContainer({ onSubmit }) {
  const [inputValue, setInputValue] = useState({
    id: '',
    date: '',
    startTime: '',
    endTime: '',
    title: '',
    description: ''
  });
  const history = useHistory();

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

    setInputValue({ ...inputValue, [name]: value });
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
        <input type='submit' value='Create' />
      </form>
    </>
  );
}

// Redux Subscription
const mapStateToProps = (state) => {
  return {
    events: state.events
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit(event) {
      writeEvent(event, dispatch);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewEventContainer);

// Redux Action..?
// const addToEventList = (event) => {
//   const newId = `event_${Math.random().toString(36).substring(2)}`;
//   event.id = newId;
//   return { type: 'ADD_EVENT', events: { [newId] : event } };
// };
