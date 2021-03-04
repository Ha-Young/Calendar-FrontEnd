import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(currentDate, eventHandlerForBefore, eventHandlerForAfter) {
  const month = new Date().getMonth() + 1;
  const week = new Date().getDate();
  return (
    <header>
      <h1>3월 첫째 주</h1>
      <nav>
        <ul>
          <li><Link to='/calendar'>일간</Link></li>
          <li><Link to="/weekly">주간</Link></li>
          <li><Link to='/events/new'>새로운 이벤트</Link></li>
          <li><button>이전</button></li>
          <li><button>다음</button></li>
        </ul>
      </nav>
    </header>
  );
}
