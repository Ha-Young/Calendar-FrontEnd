import React from 'react';
import { Link } from 'react-router-dom';
import { calculateYearMonthWeek } from "../../utils";

export default function Header(props) {
  const {
    isDaily,
    setIsDaily,
    currentDate,
    dispatch,
  } = props;
  const date = currentDate.getDate();
  const [year, month, week] = calculateYearMonthWeek(currentDate);

  const beforeDateBundle = {};
  const afterDateBundle = {};

  if (isDaily) {
    const beforeDate = new Date(year, month - 1, date - 1);
    const afterDate = new Date(year, month - 1, date + 1);
    beforeDateBundle.year = beforeDate.getFullYear();
    beforeDateBundle.month = beforeDate.getMonth();
    beforeDateBundle.date = beforeDate.getDate();
    afterDateBundle.year = afterDate.getFullYear();
    afterDateBundle.month = afterDate.getMonth();
    afterDateBundle.date = afterDate.getDate();
  } else {
    const beforeDate = new Date(year, month - 1, date - 7);
    const afterDate = new Date(year, month - 1, date + 7);
    beforeDateBundle.year = beforeDate.getFullYear();
    beforeDateBundle.month = beforeDate.getMonth();
    beforeDateBundle.date = beforeDate.getDate();
    afterDateBundle.year = afterDate.getFullYear();
    afterDateBundle.month = afterDate.getMonth();
    afterDateBundle.date = afterDate.getDate();
  }

  return (
    <header>
      <h1>{year}년 {month}월 {week}주차</h1>
      <nav>
        <ul>
          <li><Link to='/calendar' onClick={() => setIsDaily(true)}>일간</Link></li>
          <li><Link to="/weekly" onClick={() => setIsDaily(false)}>주간</Link></li>
          <li><Link to='/events/new'>새로운 이벤트</Link></li>
          <li>
            <button onClick={() => dispatch(beforeDateBundle)}>이전</button>
          </li>
          <li><button onClick={() => dispatch(afterDateBundle)}>다음</button></li>
        </ul>
      </nav>
    </header>
  );
}
