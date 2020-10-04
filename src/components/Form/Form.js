import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { ROUTERS } from '../../router';
import styles from './Form.module.css';

export default function Form({ onSubmit, initialValues, text }) {
  const [inputValues, setInputValues] = useState(initialValues || {
    id: '',
    date: '',
    startTime: '',
    endTime: '',
    title: '',
    description: ''
  });
  const history = useHistory();

  const handleFormSubmit = useCallback(function () {
    if (inputValues.endTime === '00:00') {
      inputValues.endTime = '24:00';
    }
    onSubmit(inputValues);
    history.push(ROUTERS.CALENDAR);
  }, [inputValues, onSubmit, history]);

  const handleChange = useCallback(function (e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setInputValues({ ...inputValues, [name]: value });
  }, [inputValues, setInputValues]);

  return (
    <>
      <Link to={ROUTERS.CALENDAR} className={styles.backButton}>Back</Link>
      <form onSubmit={handleFormSubmit} className={styles.Form}>
        <label>
          <input name='title' type='text' placeholder='Title' value={inputValues.title} onChange={handleChange} required/>
        </label>
        <label>
          <input name='description' type='text' placeholder='Description' value={inputValues.description} onChange={handleChange} />
        </label>
        <label>
          <input name='date' type='date' value={inputValues.date} onChange={handleChange} required/>
        </label>
        <label>
          <input name='startTime' type='time' value={inputValues.startTime} onChange={handleChange} step={3600} required/>
        </label>
        <label>
          <input name='endTime' type='time' value={inputValues.endTime} onChange={handleChange} step={3600} required/>
        </label>
        <input type='submit' value={text} />
      </form>
    </>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  initialValues: PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};
