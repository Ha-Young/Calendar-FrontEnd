import React from 'react';
import styles from './Modal.module.css';

const Modal = () => {

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.titleWrapper}>
        <input
          type='text'
          value='title'
        />
      </div>
      <div className={styles.descriptionWrapper}>
        <input
          type='text'
          value='description'
        />
      </div>
      <div className={styles.dateWrapper}>
        <div>
          <select name='startTime'>

          </select>
        </div>
        <div>
          <select name='endTime'>

          </select>
        </div>
      </div>
      <div className={styles.submitWrapper}>
        <input
          type='submit'
          value='submit'
        />
      </div>
    </div>
  )
}

export default Modal;
