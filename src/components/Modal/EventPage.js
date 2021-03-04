import React from 'react';
import { useParams, useHistory, useRouteMatch } from 'react-router-dom';
import styles from './EventPage.module.css';
import Modal from './Modal';

const Event = ({ datesInfo }) => {
  const history = useHistory();
  const { date } = useParams();
  const { url } = useRouteMatch();
  const calendarType = url.split('/')[1];
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
        <button
          className={styles.editButton}
          onClick={() => history.push(`/${calendarType}/${date}`)}
        >EDIT</button>
        <button
          className={styles.exitButton}
          onClick={() => history.goBack()}
        >EXIT</button>
      </div>
    </Modal>
  )
}

export default Event;
