import React from "react";
import PropTypes from 'prop-types';

import { getArrayOfNumbers, getFutureDate, getPastDate } from "../../utils/calander";
import Header from "./Header";
import styles from "./Calendar.module.css";
import DailyEvents from "./DailyEvents";
import CALENDAR from "../../constants/calendar";

export default function WeeklyEvents({ userId, today, fetchDailyEvent, events, isDaily }) {
  const dayOfToday = today.getDay();
  const firstDateOfWeek = getPastDate(today, dayOfToday);
  const thisWeek = [];

  for (let i = 0; i < CALENDAR.ONEWEEK; i++) {
    const date = getFutureDate(firstDateOfWeek, i);
    thisWeek.push(date);
  }

  const arrayOf24Divs = getArrayOfNumbers(24);
  
  return (
    <>
      <Header datesOfWeek={thisWeek} />
      <tbody>
      <tr>
        <td className={styles.hoursSideBar}>
          {arrayOf24Divs.map((each, index) => <td key={each + index} className={styles.eachHour}>{each}</td>)}
        </td>
        {thisWeek.map((date, index) => {
          return (
            <td className={styles.weeklyEventTd} key={date + index}>
              <DailyEvents userId={userId} today={date} isDaily={isDaily} fetchDailyEvent={fetchDailyEvent} events={events} />
            </td>
          );
        })}
      </tr>
      </tbody>
    </>
  );
}

WeeklyEvents.propTypes = {
  userId: PropTypes.string.isRequired,
  today: PropTypes.string.isRequired,
  fetchDailyEvent: PropTypes.func.isRequired,
  events: PropTypes.func.isRequired,
  isDaily: PropTypes.bool.isRequired,
};
