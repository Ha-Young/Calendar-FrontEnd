import classNames from 'classnames/bind';
import React from "react";

import { getDayOfTheWeek, getOnlyDay, getTimeList } from "../../utils/date";
import EventSticker from '../EventSticker';
import styles from "./DailySchedule.module.css";
import { getBorderStyle,getHilightStyle } from './helper';

const cx = classNames.bind(styles);

function DailySchedule({ date, diffForCurrentDate = 0, eventList }) {
  const timeList = getTimeList();

  const hilightStyle = getHilightStyle(diffForCurrentDate);
  const borderStyle = getBorderStyle(diffForCurrentDate);

  return (
    <div className={cx('dateColumn', hilightStyle)}>
      <div className={cx('dayInfo')}>
        <span className={cx('dayOfTheWeek')}>
          {getDayOfTheWeek(date)}
        </span>
        <span className={cx('dayOfMonth')}>
          {getOnlyDay(date)}
        </span>
      </div>
      <div className={cx('spanArea')} />
      {timeList.map(time => (
        <div key={time} className={cx('dateRow', borderStyle)}>
        </div>)
      )}

      {eventList.map(event => {
        return <EventSticker key={event.id} event={event} />;
      })}
    </div>
  );
}

export default DailySchedule;
