import React, { useState } from 'react';
import { saveData } from 'utils/api';
import { useHistory } from 'react-router-dom';

const EventMaker = ({ isSubmit }) => {
  const DEFAULT_DURATION = 1200;
  const history = useHistory();
  const [inputValues, setInputValues] = useState({
    title: '',
    description: '',
    date: '',
    startTime: '',
    endTime: ''
  });

  const onSubmit = event => {
    event.preventDefault();

    isSubmit(true);
    saveData(inputValues);
    setInputValues({
      title: '',
      description: '',
      date: '',
      startTime: '',
      endTime: ''
    });

    setTimeout(() => {
      history.push('/');
    }, DEFAULT_DURATION);
  };

  const onChange = event => {
    const { target: { name, value } } = event;

    switch (name) {
      case 'title':
        setInputValues({ ...inputValues, title: value }); break;
      case 'description':
        setInputValues({ ...inputValues, description: value }); break;
      case 'date':
        setInputValues({ ...inputValues, date: value }); break;
      case 'startTime':
        setInputValues({ ...inputValues, startTime: value }); break;
      case 'endTime':
        setInputValues({ ...inputValues, endTime: value }); break;
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
          type='date'
          name='date'
          placeholder='date'
          value={inputValues.date}
          onChange={onChange}
        />
        <input
          type='time'
          name='startTime'
          placeholder='startTime'
          value={inputValues.startTime}
          onChange={onChange}
        />
        <input
          type='time'
          name='endTime'
          placeholder='endTime'
          value={inputValues.endTime}
          onChange={onChange}
        />
        <button type='submit'>입력</button>
      </form>
    </>
  );
};

export default EventMaker;
