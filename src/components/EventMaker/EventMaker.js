import React, { useState } from 'react';

const EventMaker = ({ user, eventSubmit }) => {
  const [inputValues, setInputValues] = useState({
    title: '',
    description: '',
    date: ''
  });

  const onSubmit = (event) => {
    event.preventDefault();
    eventSubmit(inputValues);
    setInputValues({});
  };

  const onChange = (event) => {
    const { target: { name, value } } = event;

    switch (name) {
      case 'title':
        setInputValues({ ...inputValues, title: value, });
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
    </>
  );
}

export default EventMaker;