import React from 'react';
import { useState } from 'react';
import { Route, Link, useParams } from 'react-router-dom';

const EventDetail = ({ events }) => {
  const params = useParams();
  //url매치되는 곳에 뿌려주면 될거같은데...
  // // const foundData = [...events['2020']['10']];
  // console.log(foundData);
  return (
    <>
      {
      events &&
        <>
        <div>{events.title}</div>
        <div>{events.description}</div>
        <div>{events.date}</div>
        <button >수정</button>
        <button >삭제</button>
        </>
      }
    </>
  );
};

export default EventDetail;