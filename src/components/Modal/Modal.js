import React, { useState } from 'react';
import styles from './Modal.module.css';

const Modal = ({
  addtitle,
  adddescription,
  addstartdate,
  addenddate
  }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(1);
  let startOptionList = [];
  let endOptionList = [];

  for (let i = 0; i < 24; i++) {
    startOptionList.push(i);
  }

  for (let i = 1; i < 25; i++) {
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
  }

  return (
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
  )
}

export default Modal;
