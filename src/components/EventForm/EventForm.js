import React, { useState, useEffect } from 'react';
import moment from 'moment';

import styles from './EventForm.module.scss';
import CustomInput from '../CustomInput/CustomInput';
import CustomTimeInput from '../CustomTimeInput/CustomTimeInput';

import convertToISOString from '../../utils/convertToISOString';

export default function EventForm({ children, onSubmit, initValue, disabled }) {
  const [event, setEvent] = useState({
    title: '',
    description: '',
    date: '',
    startHour: '',
    endHour: '',
    ...initValue,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!initValue) {
      const now = moment();
      setEvent(prev => ({
        ...prev,
        date: convertToISOString.Dates(now),
        startHour: now.hour(),
        endHour: now.hour() + 1,
      }));
    }
  }, [initValue]);

  useEffect(() => {
    setError(null);
  }, [event]);

  const handleSubmit = ev => {
    ev.preventDefault();

    if (+event.endHour <= +event.startHour) {
      setError('종료시간은 시작시간 이후로 설정해주세요.');
      return;
    }

    onSubmit(event);
  };

  const handleChange = ev => {
    const { name, value } = ev.target;

    setEvent(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.EventForm}>
      <form onSubmit={handleSubmit}>
        <CustomInput
          name='title'
          type='text'
          label='Event Title'
          value={event.title}
          handleChange={handleChange}
          required
          disabled={disabled}
        />
        <CustomInput
          name='description'
          type='text'
          label='Description'
          value={event.description}
          handleChange={handleChange}
          disabled={disabled}
        />
        <CustomInput
          name='date'
          type='date'
          label='Date'
          value={event.date}
          handleChange={handleChange}
          disabled={disabled}
        />
        <CustomTimeInput
          startHour={+event.startHour}
          endHour={+event.endHour}
          handleChange={handleChange}
          disabled={disabled}
          required
        />
        <div className={styles.buttons}>{children}</div>
      </form>
      {error && <span className={styles.error}>{`😡 ${error}`}</span>}
    </div>
  );
}
