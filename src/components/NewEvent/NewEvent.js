import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import styles from './NewEvent.module.scss';
import CustomInput from '../CustomInput/CustomInput';
import CustomTimeInput from '../CustomTimeInput/CustomTimeInput';
import CustomButton from '../CustomButton/CustomButton';

import convertToISOString from '../../utils/convertToISOString';
import setNewEvent from '../../firebase/utils/setNewEvent';

const NewEvent = ({ createdBy, history, location }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [startHour, setStartHour] = useState('');
  const [endHour, setEndHour] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (location.state) {
      const { initDate, initHour } = location.state;
      setDate(initDate);
      setStartHour(initHour);
      setEndHour(initHour + 1);
    } else {
      const now = moment();
      setDate(convertToISOString.Dates(now));
      setStartHour(now.hour());
      setEndHour(now.hour() + 1);
    }
  }, [location.state]);

  useEffect(() => {
    setError(null);
  }, [title, description, date, startHour, endHour]);

  const handleSubmit = async ev => {
    ev.preventDefault();

    if (+endHour <= +startHour) {
      setError('종료시간은 시작시간 이후로 설정해주세요.');
      return;
    }

    try {
      await setNewEvent(createdBy, date, {
        createdBy,
        title,
        description,
        start: convertToISOString.combine(date, startHour + ''),
        end: convertToISOString.combine(date, endHour + ''),
      });
    } catch (error) {
      console.warn('New Event Error', error);
      setError(error.message);
    }

    history.push('/calendar');
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
          value={{ startHour, endHour }}
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
};

export default withRouter(NewEvent);
