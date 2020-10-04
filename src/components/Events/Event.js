import React, { useState } from 'react';
import styles from './Event.module.css';

function PlusEvent () {
  const [eventTitle, setEventTitle] = useState('');
  const [eventDetail, setEventDetail] = useState('');
  const [eventStartDay, setEventStartDay] = useState('');
  const [eventEndDay, setEventEndDay] = useState('');

  return (
    <div className={styles.EventOutline}>
      <form autoComplete='off'>
        <div className={styles.EventTitle}>
          <input
            id='event-title'
            type='text'
            autoComplete='off'
            placeholder='일정 추가'
            value={eventTitle}
            onChange={(ev) =>
              setEventTitle(ev.target.value)
            }
          />
        </div>

        <div className={styles.EventDetail}>
          <input
            id='event-detail'
            type='text'
            autoComplete='off'
            placeholder='일정 설명'
            value={eventDetail}
            onChange={(ev) =>
              setEventDetail(ev.target.value)
            }
          />
        </div>

        <div className={styles.EventStartDay}>
          <input
            id='event-startday'
            type='datetime-local'
            value={eventStartDay}
            onChange={(ev) =>
              setEventStartDay(ev.target.value)
            }
          />
        </div>

        <div className={styles.EventEndDay}>
          <input
            id='event-endDay'
            type='datetime-local'
            value={eventEndDay}
            onChange={(ev) =>
              setEventEndDay(ev.target.value)
            }
          />
        </div>

        <button type="submit">
          일정등록
        </button>
      </form>
    </div>
  );
}

export default PlusEvent;
