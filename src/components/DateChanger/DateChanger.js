import React from 'react';
import styles from './DateChanger.module.css';
import { formatDistance, subDays, addDays } from 'date-fns';
import format from 'date-fns/format';
import { useHistory } from 'react-router-dom';

const DateChanger = ({
  month,
  setMonth,
  day,
  setDay,
  days,
  setDays,
  year,
  setYear
}) => {
  console.log(addDays(new Date(), 1));
  const history = useHistory();
  const pathName = history.location.pathname;

  const formattedDate = format(new Date(), 'MM/dd/yyyy');

  console.log(typeof (formattedDate));
  // => "03/17/2020"

  const onClick = (event) => {
    const { target: name } = event;

    switch (pathName) {
      case '/':
        if (name === 'prev') {
          setDays({
            mon: days.mon - 1, //set before day
            tue: days.tue - 1,
            wen: days.wen - 1,
            thu: days.thu - 1,
            fri: days.fri - 1,
            sat: days.sat - 1,
            sun: days.sun - 1
          });
          setMonth(month - 1);
          setYear(year);
        } else {
          setDays({
            mon: days.mon + 1, //set next day
            tue: days.tue + 1,
            wen: days.wen + 1,
            thu: days.thu + 1,
            fri: days.fri + 1,
            sat: days.sat + 1,
            sun: days.sun + 1
          });
          setMonth(month + 1);
          setYear(year);
        }
        break;
      case '/day':
        if (name === 'prev') {
          setDay(day);
          setMonth(month - 1); //set  before day
          setYear(year);
        } else {
          setDay(day + 1);
          setMonth(month + 1);
          setYear(year);
        }
        break;
    }
  }
  // addDays(오늘로부터, 3일후)

  console.log(formatDistance(subDays(new Date(), 3), new Date()));
  return (
    <div className={styles.changeButton}>
      <button name='prev' onClick={onClick}>PREV</button>
      <div><h1>{year}</h1></div>
      <div><h1>{month}</h1></div>
      <button name='next' onClick={onClick}>NEXT</button>
    </div>
  );
};

export default DateChanger;
