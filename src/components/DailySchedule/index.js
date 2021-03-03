import classNames from 'classnames/bind';
import React from "react";

import { getDayOfTheWeek, getOnlyDay, getTimeList } from "../../utils/date";
import styles from "./DailySchedule.module.css";
import { getBorderStyle,getHilightStyle } from './helper';

const cx = classNames.bind(styles);

function DailySchedule({ date, diffForCurrentDate = 0, eventList }) {
  console.log(date, eventList);

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
      {timeList.map(time => (
        <div key={time} className={cx('dateRow', borderStyle)}>
        </div>)
      )}
    </div>
  );
}

export default DailySchedule;
