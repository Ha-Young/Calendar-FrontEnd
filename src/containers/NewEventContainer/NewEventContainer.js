import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function NewEventContainer({ onSubmit, events }) {
  const [inputValue, setInputValue] = useState({
    id: null,
    date: null,
    startTime: null,
    endTime: null,
    title: null,
    description: null
  });

  useEffect(() => {
    console.log(events);
  }, [events]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputValue);
    onSubmit(inputValue);
  }

  function handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  }

  return (
    <>
      <Link to='/calendar'>Back</Link>
      <form onSubmit={handleSubmit}>
        <label>
          Title: <input name='title' type='text' onChange={handleChange} />
        </label>
        <label>
          Description: <input name='description' type='text' onChange={handleChange} />
        </label>
        <label>
          Date: <input name='date' type='date' onChange={handleChange} />
        </label>
        <label>
          Start: <input name='startTime' type='time' onChange={handleChange} step={3600} />
        </label>
        <label>
          End: <input name='endTime' type='time' onChange={handleChange} step={3600} />
        </label>
        <input type='submit' value='create event' />
      </form>
    </>
  );
}

// Redux Action..?
const addToEventList = (event) => {
  const newId = `event_${Math.random().toString(36).substring(2)}`;
  event.id = newId;
  return { type: 'ADD_EVENT', events: { [newId] : event } };
};

// Redux Subscription
const mapStateToProps = (state) => {
  return {
    events: state.events
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit(event) {
      dispatch(addToEventList(event));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewEventContainer);


/*

DB STRUCTURE..

CRUD..

events: {
  [timeStamp-1]: {
    event_1: {
      id: event_1,
      date: 2020-09-30,
      startTime: 18:00,
      endTime: 20:00,
      title: title,
      description: description
    },
    event_2: {
      id: event_1,
      date: 2020-09-30,
      startTime: 18:00,
      endTime: 20:00,
      title: title,
      description: description
    }
  },
  [timeStamp-2]: {
    event_1: {
      ...
    },
    event_2: {
      ...
    }
  }
}

*/

// const makeEventObject = (event) => {
//   const eventProps = ['id', 'title', 'description', 'date', 'startTime', 'endTime'];
//   let eventObj = eventProps.reduce((obj, key, index) => {
//     if (key === 'id') {
//       obj[key] = 'event_' + Math.random().toString(36).substring(2);
//       return obj;
//     }
//     if (!event[index - 1]) {
//       obj[key] = null;
//       return obj;
//     }
//     obj[key] = event[index - 1];
//     return obj;
//   }, {});

//   return eventObj;
// };