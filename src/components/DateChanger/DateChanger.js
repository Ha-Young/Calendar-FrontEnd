import React from 'react';
import styles from './DateChanger.module.css';
import { formatDistance, subDays, addDays } from 'date-fns'
import { useHistory } from 'react-router-dom';
const DateChanger = ({
  month,
  setMonth,
  day,
  setDay,
  days,
  setDays
}) => {
  const history = useHistory();
  const pathName = history.location.pathname;

  const onClick = (event) => {
    const { target: name } = event;

    switch (pathName) {
      case '/':
        if (name === 'prev') {

        } else {

        }
        break;
      case '/day':
        if (name === 'next') {

        } else {

        }
        break;

      default:
        break;
    }
  }
  // addDays(오늘로부터, 3일후)

  console.log(formatDistance(subDays(new Date(), 3), new Date()));
  return (
    <div className={styles.changeButton}>
      <button name='prev' onClick={onClick}>PREV</button>
      <div><h1>{month}</h1></div>
      <button name='next' onClick={onClick}>NEXT</button>
    </div>
  );
};

export default DateChanger;
