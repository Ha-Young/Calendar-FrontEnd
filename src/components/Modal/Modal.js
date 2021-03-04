import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styles from './Modal.module.css';
import { TIME_UNTIL_ELEVEN, TIME_UNTIL_TWELVE } from '../../constant';

const Modal = ({ addsubmitdata }) => {
  const history = useHistory();
  const { date } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(1);
  let startOptionList = [];
  let endOptionList = [];

  for (let i = 0; i < TIME_UNTIL_ELEVEN; i++) {
    startOptionList.push(i);
  }

  for (let i = 1; i < TIME_UNTIL_TWELVE; i++) {
    endOptionList.push(i);
  }

  startOptionList = startOptionList.map((time, index) => {
    return (
      <option
        value={time}
        key={index}
      >
        {time}
      </option>
    )
  });

  endOptionList = endOptionList.map((time, index) => {
    return (
      <option
        value={time}
        key={index}
      >
        {time}
      </option>
    )
  });

  const handleSelectChange = (e) => {
    if (e.target.name === 'startTime') {
      setStartTime(e.target.value);
    } else {
      setEndTime(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log('title' + title.length, 'des:'+ description.length);
    console.log('start'+ startTime, 'end'+ endTime);
    if (title.length === 0 || description.length === 0) return;
    if (Number(startTime) >= Number(endTime)) return;

    addsubmitdata({
      date,
      title,
      description,
      startTime,
      endTime
    });

    history.goBack();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.modalWrapper}>
        <div className={styles.titleWrapper}>
          <input
            type='text'
            maxLength='20'
            value={title}
            placeholder='title'
            onChange={(e) => setTitle(e.target.value)}
            className={styles.titleInput}
          />
        </div>
        <div className={styles.descriptionWrapper}>
          <input
            type='text'
            maxLength='20'
            value={description}
            placeholder='description'
            onChange={(e) => setDescription(e.target.value)}
            className={styles.descriptionInput}
          />
        </div>
        <div className={styles.dateSelectWrapper}>
          <div>
            <select
              name='startTime'
              value={Number(startTime)}
              className={styles.startTimeSelect}
              onChange={(e) => handleSelectChange(e)}
            >
              {startOptionList}
            </select>
          </div>
          <div>
            <select
              name='endTime'
              value={endTime}
              className={styles.endTimeSelect}
              onChange={(e) => handleSelectChange(e)}
            >
              {endOptionList}
            </select>
          </div>
        </div>
        <div className={styles.submitWrapper}>
          <input
            type='submit'
            value='submit'
            className={styles.submitButton}
          />
        </div>
      </div>
    </form>
  )
};

export default Modal;
