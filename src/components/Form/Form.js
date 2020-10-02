import React, { useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ROUTER } from '../../router';
import styles from './Form.module.css';

export default function Form({ onSubmit, target, text }) {
  const [inputValue, setInputValue] = useState(target || {
    id: '',
    date: '',
    startTime: '',
    endTime: '',
    title: '',
    description: ''
  });
  const history = useHistory();

  const handleFormSubmit = useCallback(function () {
    if (inputValue.endTime === '00:00') {
      inputValue.endTime = '24:00';
    }
    onSubmit(inputValue);
    history.push(ROUTER.CALENDAR);
  }, [inputValue, onSubmit, history]);

  const handleChange = useCallback(function (e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setInputValue({ ...inputValue, [name]: value });
  }, [inputValue, setInputValue]);

  return (
    <>
      <Link to={ROUTER.CALENDAR} className={styles.backButton}>Back</Link>
      <form onSubmit={handleFormSubmit} className={styles.Form}>
        <label>
          <input name='title' type='text' placeholder='Title' value={inputValue.title} onChange={handleChange} />
        </label>
        <label>
          <input name='description' type='text' placeholder='Description' value={inputValue.description} onChange={handleChange} />
        </label>
        <label>
          <input name='date' type='date' value={inputValue.date} onChange={handleChange} />
        </label>
        <label>
          <input name='startTime' type='time' value={inputValue.startTime} onChange={handleChange} step={3600} />
        </label>
        <label>
          <input name='endTime' type='time' value={inputValue.endTime} onChange={handleChange} step={3600} />
        </label>
        <input type='submit' value={text} />
      </form>
    </>
  );
}
