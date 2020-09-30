import React from 'react';
import { useState } from 'react';
import { Route, Link } from 'react-router-dom';

const Event = ({ event }) => {
  const [isClickedEvent, setIsClickedEvent] = useState(false);

  const onClick = () => {
    setIsClickedEvent(true);
  }

  return (
    <>
      <Link to={`/events/${event.id}`}>
        <div onClick={onClick}>{event.title}</div>
      </Link>
      {
        isClickedEvent &&
        <Route path='/events/:eventId'>
          <div>{event.title}</div>
          <div>{event.description}</div>
          <div>{event.date}</div>
          <button >수정</button>
          <button >삭제</button>
        </Route>
      }
    </>
  );
};

export default Event;

//connet해서 들어오는 evnet를 또 수정할 수 있게 해야...


//방향..?
//컴포넌트안에 시간을 더 쪼개서 div를 추가 div클릭
