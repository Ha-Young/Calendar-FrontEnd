import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addEvent } from 'action/action';
import Event from 'components/Event/Event';
import { Route } from 'react-router-dom';

export const NewEvent = ({ newEvent, setEvent }) => {
  const [isCreateEvent, setIsCreateEvent] = useState(false);
  const [inputValues, setInputValues] = useState({
    title: '',
    description: '',
    date: ''
  });

  const onSubmit = (event) => {
    event.preventDefault();
    setEvent(inputValues);
    setIsCreateEvent(true);
  };

  const onChange = (event) => {
    const { target: { name, value } } = event;
    switch (name) {
      case 'title':
        setInputValues({ ...inputValues, title: value });
        break;
      case 'description':
        setInputValues({ ...inputValues, description: value });
        break;
      case 'date':
        setInputValues({ ...inputValues, date: value });
    }
  };

  return (
    <>
      <h3>New Event</h3>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='title'
          placeholder='title'
          value={inputValues.title}
          onChange={onChange}
        />
        <input
          type='text'
          name='description'
          placeholder='description'
          value={inputValues.description}
          onChange={onChange}
        />
        <input
          type='datetime-local'
          name='date'
          placeholder='date'
          value={inputValues.date}
          onChange={onChange}
        />
        <button type='submit'>입력</button>
      </form>
      {
        isCreateEvent &&
        <Route path='/events/:eventId'>
          <Event event={newEvent} />
        </Route>
      }
    </>
  )

};

const mapStateToProps = (state) => {
  return { newEvent: state.event };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setEvent: event => { dispatch(addEvent(event)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewEvent);

