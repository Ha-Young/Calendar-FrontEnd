import React, { useState } from 'react';

const EventMaker = ({ eventSubmit }) => {
  const [inputValues, setInputValues] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: ''
  });

  const onSubmit = (event) => {
    event.preventDefault();
    eventSubmit(inputValues);
    setInputValues({
      title: '',
      description: '',
      startDate: '',
      endDate: ''
    });
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
      case 'startDate':
        setInputValues({ ...inputValues, startDate: value });
        break;
      case 'endDate':
        setInputValues({ ...inputValues, endDate: value });
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
          name='startDate'
          placeholder='start date'
          value={inputValues.startDate}
          onChange={onChange}
        />
        <input
          type='datetime-local'
          name='endDate'
          placeholder='end date'
          value={inputValues.endDate}
          onChange={onChange}
        />
        <button type='submit'>입력</button>
      </form>
    </>
  );
}

export default EventMaker;
