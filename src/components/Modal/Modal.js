import React, { useState } from 'react';
import styles from './Modal.module.css';

const Modal = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
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
            className={styles.startTimeSelect}
          >
            {startOptionList}
          </select>
        </div>
        <div>
          <select
            name='endTime'
            className={styles.endTimeSelect}
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
