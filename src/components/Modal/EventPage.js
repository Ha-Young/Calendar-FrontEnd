import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './EventPage.module.css';
import Modal from './Modal';

const Event = ({ datesInfo }) => {
  const { date } = useParams();
  const infoObj = datesInfo[date];
  const title = infoObj.title;
  const description = infoObj.description;
  const startTime = infoObj.startTime;
  const endTime = infoObj.endTime;

  return (
    <Modal
      scheduleTitle={title}
      scheduleDescription={description}
      scheduleStartTime={startTime}
      scheduleEndTime={endTime}
    >
      <div className={styles.buttonsWrapper}>
        <button className={styles.editButton}>EDIT</button>
        <button className={styles.exitButton}>EXIT</button>
      </div>
    </Modal>
  )
}

export default Event;
