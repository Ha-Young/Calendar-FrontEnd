import React, { useState, useEffect } from 'react';
import moment from 'moment';

import styles from './NewEvent.module.scss';
import CustomInput from '../CustomInput/CustomInput';
import CustomTimeInput from '../CustomTimeInput/CustomTimeInput';
import CustomButton from '../CustomButton/CustomButton';

import convertToISOString from '../../utils/convertToISOString';
import setEventByDate from '../../firebase/utils/setEventByCurrentUser';

export default function NewEvent({ currentUser, initDate, initStartHour }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [startHour, setStartHour] = useState('');
  const [endHour, setEndHour] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    setDate(convertToISOString.Dates(initDate || moment()));
  }, [initDate]);

  useEffect(() => {
    setError(null);
  }, [title, description, date, startHour, endHour]);

  const handleSubmit = async ev => {
    ev.preventDefault();

    if (+endHour <= +startHour) {
      setError('종료시간은 시작시간 이후로 설정해주세요.');
      return;
    }

    const result = await setEventByDate(currentUser.uid, date, {
      title,
      description,
      start: convertToISOString.combine(date, startHour + ''),
      endHour: convertToISOString.combine(date, endHour + ''),
    });

    console.log(result.val());
  };

  return (
    <div className={styles.NewEvent}>
      <h2>New Event</h2>
      <form onSubmit={handleSubmit}>
        <CustomInput
          type='text'
          label='Event Title'
          value={title}
          handleChange={ev => setTitle(ev.target.value)}
          required
        />
        <CustomInput
          type='text'
          label='Description'
          value={description}
          handleChange={ev => setDescription(ev.target.value)}
          required
        />
        <CustomInput
          type='date'
          label='Date'
          value={date}
          handleChange={ev => setDate(ev.target.value)}
          required
        />
        <CustomTimeInput
          startHandler={setStartHour}
          endHandler={setEndHour}
          required
        />
        <div className={styles.buttons}>
          <CustomButton type='submit'>새 이벤트 등록</CustomButton>
        </div>
      </form>
      {error && <span className={styles.error}>{`😡 ${error}`}</span>}
    </div>
  );
}
