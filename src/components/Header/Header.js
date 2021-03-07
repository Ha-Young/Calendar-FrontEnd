import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getYearMonthWeek } from "../../utils";

export default function Header({ currentDate, updateCurrentDate }) {
  const [calendarType, setCalendarType] = useState("daily");
  const date = currentDate.getDate();
  const { year, month, week } = getYearMonthWeek(currentDate);

  const beforeDateBundle = {};
  const afterDateBundle = {};
  let beforeDate;
  let afterDate;

  switch (calendarType) {
    case "daily":
    beforeDate = new Date(year, month - 1, date - 1);
    afterDate = new Date(year, month - 1, date + 1);
    beforeDateBundle.year = beforeDate.getFullYear();
    beforeDateBundle.month = beforeDate.getMonth();
    beforeDateBundle.date = beforeDate.getDate();
    afterDateBundle.year = afterDate.getFullYear();
    afterDateBundle.month = afterDate.getMonth();
    afterDateBundle.date = afterDate.getDate();
    break;

    case "weekly":
    beforeDate = new Date(year, month - 1, date - 7);
    afterDate = new Date(year, month - 1, date + 7);
    beforeDateBundle.year = beforeDate.getFullYear();
    beforeDateBundle.month = beforeDate.getMonth();
    beforeDateBundle.date = beforeDate.getDate();
    afterDateBundle.year = afterDate.getFullYear();
    afterDateBundle.month = afterDate.getMonth();
    afterDateBundle.date = afterDate.getDate();
    break;

    default:
      // add default case
  }

  return (
    <header>
      <h1>{year}년 {month}월 {week}주차</h1>
      <nav>
        <ul>
          <li>
            <Link to='/calendar' onClick={() => setCalendarType("daily")}>
              일간
            </Link>
          </li>
          <li>
            <Link to="/calendar/weekly" onClick={() => setCalendarType("weekly")}>
              주간
            </Link>
          </li>
          <li>
            <Link to='/events/new'>
              새로운 이벤트
            </Link>
          </li>
          <li>
            <button onClick={() => updateCurrentDate(beforeDateBundle)}>
              이전
            </button>
          </li>
          <li>
            <button onClick={() => updateCurrentDate(afterDateBundle)}>
              다음
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
